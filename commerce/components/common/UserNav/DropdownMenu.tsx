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
import testImg from '../../../public/assets/test_avatar.jpg'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import getUserProfile from '@utils/getUserProfile'
import { useUserProfile } from '../../../hooks'

interface DropdownMenuProps {
  open?: boolean
}

const LINKS = [
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
]

const DropdownMenu: FC<DropdownMenuProps> = ({ open = false }) => {
  const logout = useLogout()
  const { pathname } = useRouter()
  const { theme, setTheme } = useTheme()

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

  const userName = useUserProfile()?.displayName
  const profilePic = useUserProfile()?.photoURL

  useEffect(() => {
    console.log(profilePic)
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
  }, [display, profilePic])

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
                  <div className="h-12 w-12">
                    <Image
                      src={profilePic || (testImg as any)}
                      height="100%"
                      width="100%"
                      alt="test profile"
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-md font-semibold pl-2 flex flex-col items-start text-gray-700">
                    Hello,{' '}
                    <span className="text-xl font-bold">
                      {userName?.split(' ')[0] || 'Anonymous'}
                    </span>
                  </p>
                </div>
              </li>
              {LINKS.map(({ name, href }) => (
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
              {/* <li>
                <a
                  className={cn(s.link, 'border-t border-accent-2 mt-4')}
                  onClick={() => logout()}
                >
                  Logout
                </a>
              </li> */}
            </ul>
          )}
        </div>
      </ClickOutside>
    </>
  )
}

export default DropdownMenu
