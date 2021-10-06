// Extra
import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import DropdownMenu from '../UserNav/DropdownMenu'
import { WishlistButton } from '@components/wishlist'
import Notification from '../Notification/Notification'
import { useRouter } from 'next/router'

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[]
}

interface Category {
  label: string
  link: string
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  const [categories] = useState<Category[]>([
    { label: 'Flash Sale!', link: '/items/111' },
    { label: 'Back to Work', link: '/items/111' },
    { label: 'Student Discount', link: '/items/111' },
    { label: 'IPhone XS', link: '/items/111' },
    { label: 'Macbook', link: '/items/111' },
    { label: 'IPhone 11', link: '/items/111' },
    { label: 'IPhone', link: '/items/111' },
    { label: 'IPad', link: '/items/111' },
    { label: 'IPhone XR', link: '/items/111' },
    { label: 'Best Sellers', link: '/items/111' },
    { label: 'Apple Watch', link: '/items/111' },
    { label: 'Samsung Galaxy', link: '/items/111' },
    { label: 'Certified Renewed', link: '/items/111' },
    { label: 'IPhone X', link: '/items/111' },
    { label: 'Laptops', link: '/items/111' },
    { label: 'IPhone 8', link: '/items/111' },
    { label: 'Unlocked Phones', link: '/items/111' },
    { label: 'Monitors', link: '/items/111' },
    { label: 'iMac', link: '/items/111' },
    { label: 'Video Game Consoles', link: '/items/111' },
    { label: 'Tablet', link: '/items/111' },
    { label: 'Audio', link: '/items/111' },
    { label: 'AirPods', link: '/items/111' },
    { label: 'Chromebooks', link: '/items/111' },
    { label: 'Macbook Airs', link: '/items/111' },
    { label: '5G Phones', link: '/items/111' },
  ])

  const router = useRouter()

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 10,
    mode: 'free',
    spacing: 1,
  })

  useEffect(() => {
    console.log(navigator.language)
  }, [])
  return (
    <>
      <NavbarRoot>
        <Container>
          <div className={`${s.nav} w-full`}>
            <div className="flex items-center flex-1 justify-between w-full">
              <Link href="/">
                <a className={s.logo} aria-label="Logo">
                  <Logo />
                </a>
              </Link>
              <div className="hidden mx-2 md:w-1/2 md:block">
                <Searchbar />
              </div>

              <nav className={`${s.navMenu} ml-8 flex justify-around w-full`}>
                <Link href={s.link}>
                  <a className={s.link}>All</a>
                </Link>
                {links?.map((l) => (
                  <Link href={l.href} key={l.href}>
                    <a className={s.link}>{l.label}</a>
                  </Link>
                ))}
              </nav>

              <div className="flex items-center justify-between space-x-7">
                <WishlistButton
                  productId="23"
                  variant={{
                    id: 1,
                    options: [
                      {
                        id: '21',
                        displayName: 'Redmi',
                        values: [{ label: 'xiaomi', hexColors: ['#333'] }],
                      },
                    ],
                  }}
                />
                {/* Notification */}
                <Notification color="bg-purple" />
                {/* <CartSidebarView /> */}
                <DropdownMenu />
              </div>
            </div>
            {process.env.COMMERCE_SEARCH_ENABLED && (
              <div className="justify-center flex-1 hidden lg:flex">
                <Searchbar />
              </div>
            )}
            <div className="items-center justify-end flex-1 space-x-8 hidden">
              <UserNav />
            </div>
          </div>
          <div className="flex pb-4 lg:px-6 lg:hidden">
            <Searchbar id="mobile-search" />
          </div>

          <div className="hidden md:block">
            <div ref={sliderRef} className="keen-slider">
              {categories.map((cat, i) => (
                <Link key={i} href={cat.link}>
                  <a className={`keen-slider__slide slide`}>{cat.label}</a>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </NavbarRoot>
    </>
  )
}

export default Navbar
