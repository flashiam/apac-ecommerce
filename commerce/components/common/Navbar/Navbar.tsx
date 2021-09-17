// Extra

import { FC, useState } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import DropdownMenu from '../UserNav/DropdownMenu'
import { WishlistButton } from '@components/wishlist'
import Wish from 'pages/wishlist'

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[]
}

// interface Refery{
//   refer?:LegacyRef<HTMLDivElement>
// }
interface Category {
  label: string
  link: string
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  const [categories] = useState<Category[]>([
    { label: 'Flash Sale!', link: '/page1' },
    { label: 'Back to Work', link: '/page1' },
    { label: 'Student Discount', link: '/page1' },
    { label: 'IPhone XS', link: '/page1' },
    { label: 'Macbook', link: '/page1' },
    { label: 'IPhone 11', link: '/page1' },
    { label: 'IPhone', link: '/page1' },
    { label: 'IPad', link: '/page1' },
    { label: 'IPhone XR', link: '/page1' },
    { label: 'Best Sellers', link: '/page1' },
    { label: 'Apple Watch', link: '/page1' },
    { label: 'Samsung Galaxy', link: '/page1' },
    { label: 'Certified Renewed', link: '/page1' },
    { label: 'IPhone X', link: '/page1' },
    { label: 'Laptops', link: '/page1' },
    { label: 'IPhone 8', link: '/page1' },
    { label: 'Unlocked Phones', link: '/page1' },
    { label: 'Monitors', link: '/page1' },
    { label: 'iMac', link: '/page1' },
    { label: 'Video Game Consoles', link: '/page1' },
    { label: 'Tablet', link: '/page1' },
    { label: 'Audio', link: '/page1' },
    { label: 'AirPods', link: '/page1' },
    { label: 'Chromebooks', link: '/page1' },
    { label: 'Macbook Airs', link: '/page1' },
    { label: '5G Phones', link: '/page1' },
  ])

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 10,
    mode: 'free',
    spacing: 1,
  })

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

              <div className="flex items-center">
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
