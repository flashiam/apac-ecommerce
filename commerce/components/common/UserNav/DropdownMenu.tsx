import cn from 'classnames'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { FC, useRef, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import s from './DropdownMenu.module.css'
import { Avatar } from '@components/common'
import { Moon, Sun } from '@components/icons'
import { useUI } from '@components/ui/context'
import ClickOutside from '@lib/click-outside'
import useLogout from '@framework/auth/use-logout'
import { useSelector, useDispatch } from 'react-redux'
// import testImg from '../../../public/assets/test_avatar.jpg'
import { getAuth, signOut, deleteUser } from 'firebase/auth'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { UserProfile } from '../../../hooks'
import app from 'firebase-config'
import testImg from '../../../public/assets/profile/p2.jpg'
import { Customer, CustomerState, GlobalState } from 'data1'
import { removeCustomer } from '../../../actions/customerAction'

interface DropdownMenuProps {
  open?: boolean
}

const AUTH_LINKS = [
  {
    name: 'My Orders',
    href: '/orders',
  },
  {
    name: 'My Profile',
    href: '/profile',
  },
  {
    name: 'My Cart',
    href: '/cart',
  },
  {
    name: 'Support',
    href: '/support',
  },
]

const UNAUTH_LINKS = [
  {
    name: 'My Cart',
    href: '/cart',
  },
]

const DropdownMenu: FC<DropdownMenuProps> = ({ open = false }) => {
  const logout = useLogout()
  const dispatch = useDispatch()
  const { customer, loggedIn } = useSelector(
    ({ customers }: GlobalState) => customers
  )
  const { pathname } = useRouter()
  const { theme, setTheme } = useTheme()
  // Using firebase auth
  const auth = getAuth(app)
  const [menuLinks, setMenuLinks] = useState<{ name: string; href: string }[]>(
    []
  )

  // State for user signin status
  const [isLoggedIn, setLoggedIn] = useState(false)

  const [display, setDisplay] = useState(false)
  const { closeSidebarIfPresent, openModal, setModalView } = useUI()
  const ref = useRef() as React.MutableRefObject<HTMLUListElement>

  // Function to allow user to sign in
  const userSignIn = () => {
    setModalView('LOGIN_VIEW')
    return openModal()
  }

  // Function to allow user to sign up
  const userSignUp = () => {
    setModalView('SIGNUP_VIEW')
    return openModal()
  }

  // Function to sign out a user
  const logOut = async () => {
    try {
      await signOut(auth)
      await auth.currentUser?.delete()
      dispatch(removeCustomer())
      setLoggedIn(false)
    } catch (err) {
      console.log(err)
    }
  }

  const userName = UserProfile()?.displayName
  const profilePic = UserProfile()?.photoURL
  const isVerified = UserProfile()?.emailVerified

  useEffect(() => {
    auth.currentUser ? setLoggedIn(true) : setLoggedIn(false)

    if (ref.current) {
      if (display) {
        disableBodyScroll(ref.current)
      } else {
        enableBodyScroll(ref.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [display, profilePic, auth])

  useEffect(() => {
    loggedIn ? setMenuLinks(AUTH_LINKS) : setMenuLinks(UNAUTH_LINKS)
  }, [loggedIn])

  return (
    <>
      <ClickOutside active={display} onClick={() => setDisplay(false)}>
        <div>
          <button
            className={s.avatarButton}
            onClick={() => setDisplay(!display)}
            aria-label="Menu"
          >
            <Avatar />
          </button>
          {display && (
            <ul className={s.dropdownMenu} ref={ref}>
              <li className="mx-6 py-3">
                <div className="flex justify-start items-center">
                  {loggedIn && customer ? (
                    <div className="h-12 w-12">
                      <Image
                        src={
                          loggedIn && customer
                            ? customer.profilePic
                            : (testImg as any)
                        }
                        height="100%"
                        width="100%"
                        alt="test profile"
                        className="object-cover rounded-full"
                      />
                    </div>
                  ) : (
                    <i className="material-icons text-5xl">account_circle</i>
                  )}
                  <p className="text-md font-semibold pl-2 flex flex-col items-start text-gray-700">
                    Hello,{' '}
                    <span className="text-xl font-bold">
                      {loggedIn ? customer?.name.split(' ')[0] : 'Guest'}
                    </span>
                  </p>
                </div>
              </li>
              {menuLinks.map(({ name, href }) => (
                <li key={href}>
                  <div>
                    <Link href={href}>
                      <a
                        className={cn(s.link, {
                          [s.active]: pathname === href,
                        })}
                        onClick={() => {
                          setDisplay(false)
                          closeSidebarIfPresent()
                        }}
                      >
                        {name}
                      </a>
                    </Link>
                  </div>
                </li>
              ))}
              <li>
                <a
                  className={cn(s.link, 'justify-between')}
                  onClick={() => {
                    theme === 'dark' ? setTheme('light') : setTheme('dark')
                    setDisplay(false)
                  }}
                >
                  <div>
                    Theme: <strong>{theme}</strong>{' '}
                  </div>
                  <div className="ml-3">
                    {theme == 'dark' ? (
                      <Moon width={20} height={20} />
                    ) : (
                      <Sun width="20" height={20} />
                    )}
                  </div>
                </a>
              </li>
              {loggedIn ? (
                <li>
                  <a
                    className={cn(s.link, 'border-t border-accent-2 mt-4')}
                    onClick={logOut}
                  >
                    Sign Out
                  </a>
                </li>
              ) : (
                <>
                  <li>
                    <a
                      className={cn(s.link, 'border-t border-accent-2 mt-4')}
                      onClick={userSignIn}
                    >
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a className={cn(s.link)} onClick={userSignUp}>
                      Sign Up
                    </a>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </ClickOutside>
    </>
  )
}

export default DropdownMenu
