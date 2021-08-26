// import { FC } from 'react'
// import Link from 'next/link'
// import s from './Navbar.module.css'
// import NavbarRoot from './NavbarRoot'
// import { Logo, Container } from '@components/ui'
// import { Searchbar, UserNav } from '@components/common'

// interface Link {
//   href: string
//   label: string
// }
// interface NavbarProps {
//   links?: Link[]
// }

// const Navbar: FC<NavbarProps> = ({ links }) => (
//   <NavbarRoot>
//     <Container>
//       <div className={s.nav}>
//         <div className="flex items-center flex-1">
//           <Link href="/">
//             <a className={s.logo} aria-label="Logo">
//               <Logo />
//             </a>
//           </Link>
//           <nav className={s.navMenu}>
//             <Link href="/search">
//               <a className={s.link}>All</a>
//             </Link>
//             {links?.map((l) => (
//               <Link href={l.href} key={l.href}>
//                 <a className={s.link}>{l.label}</a>
//               </Link>
//             ))}
//           </nav>
//         </div>
//         {process.env.COMMERCE_SEARCH_ENABLED && (
//           <div className="justify-center flex-1 hidden lg:flex">
//             <Searchbar />
//           </div>
//         )}
//         <div className="flex items-center justify-end flex-1 space-x-8">
//           <UserNav />
//         </div>
//       </div>
//       <div className="flex pb-4 lg:px-6 lg:hidden">
//         <Searchbar id="mobile-search" />
//       </div>
//     </Container>
//   </NavbarRoot>
// )

// export default Navbar

// Extra

import { FC, useState } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

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
    { label: 'Flash Sales!', link: '/sales' },
    { label: 'Back to Work', link: '/sales' },
    { label: 'Student Discount', link: '/sales' },
    { label: 'IPhone XS', link: '/sales' },
    { label: 'Macbook', link: '/sales' },
    { label: 'IPhone 11', link: '/sales' },
    { label: 'IPhone', link: '/sales' },
    { label: 'IPad', link: '/sales' },
    { label: 'IPhone XR', link: '/sales' },
    { label: 'Best Sellers', link: '/sales' },
    { label: 'Apple Watch', link: '/sales' },
    { label: 'Samsung Galaxy', link: '/sales' },
    { label: 'Certified Renewed', link: '/sales' },
    { label: 'IPhone X', link: '/sales' },
    { label: 'Laptops', link: '/sales' },
    { label: 'IPhone 8', link: '/sales' },
    { label: 'Unlocked Phones', link: '/sales' },
    { label: 'Monitors', link: '/sales' },
    { label: 'iMac', link: '/sales' },
    { label: 'Video Game Consoles', link: '/sales' },
    { label: 'Tablet', link: '/sales' },
    { label: 'Audio', link: '/sales' },
    { label: 'AirPods', link: '/sales' },
    { label: 'Chromebooks', link: '/sales' },
    { label: 'Macbook Airs', link: '/sales' },
    { label: '5G Phones', link: '/sales' },
  ])

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 10,
    mode: 'free',
    spacing: 1,
  })

  return (
    <NavbarRoot>
      <Container>
        <div className={s.nav}>
          <div className="flex items-center flex-1 w-full">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <div className="hidden mx-2 w-1/2 md:block">
              <Searchbar />
            </div>
            <nav className={s.navMenu}>
              <Link href="/search">
                <a className={s.link}>All</a>
              </Link>
              {links?.map((l) => (
                <Link href={l.href} key={l.href}>
                  <a className={s.link}>{l.label}</a>
                </Link>
              ))}
            </nav>
          </div>
          {process.env.COMMERCE_SEARCH_ENABLED && (
            <div className="justify-center flex-1 hidden lg:flex">
              <Searchbar />
            </div>
          )}
          <div className="flex items-center justify-end flex-1 space-x-8">
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
  )
}

export default Navbar
