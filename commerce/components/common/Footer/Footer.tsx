import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const titleOfLinks = [
  {title:"About",links:["mango","banana","apple","guava","strawberry"]},
  {title:"Help",links:["mango","banana","apple","guava","strawberry"]},
  {title:"Law & order",links:["mango","banana","apple","guava","strawberry"]},
  {title:"Hello!",links:["mango","banana","apple","guava","strawberry"]},
]

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={`${rootClassName} bg-black p-4`}>
          {/* Footer customization */}
      <div className="my-4 text-white">
            <h2>Hello! We're Back Market, the leading marketplace for renewed devices. Our mission? To fight e-waste by giving expertly restored devices a second life.</h2>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 md:grid">
              {titleOfLinks.map((tl, i) => (
              <div key={i} className="text-center" >

              <h2 className="my-6 font-bold text-white text-xl">{tl.title}</h2>
              {tl.links.map((l,i) => (
                <div key={i}>
                  <Link href="!#"><a className="my-2 font-thin text-white">{l}</a></Link> 
              </div>
              ))}
            </div>
           ))}
           </div>
        <div style={{background:"#E5E5E5", height:"0.5px"}} className="my-8 w-full"></div>
      </div>
      {/* Extra  */}
      <Container>
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accent-2 py-12 text-primary bg-primary transition-colors duration-150"> */}
          {/* <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <a className="flex flex-initial items-center font-bold md:mr-24">
                <span className="rounded-full border border-accent-6 mr-2">
                  <Logo />
                </span>
                <span>ACME</span>
              </a>
            </Link>
          </div> */}
          {/* <div className="col-span-1 lg:col-span-8">
            <div className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
              {[...links, ...sitePages].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </span>
              ))}
            </div>
          </div> */}
          {/* <div className="col-span-1 lg:col-span-2 flex items-start lg:justify-end text-primary">
            <div className="flex space-x-6 items-center h-10">
              <a
                className={s.link}
                aria-label="Github Repository"
                href="https://github.com/vercel/commerce"
              >
                <Github />
              </a>
              <I18nWidget />
            </div>
          </div> */}
        {/* </div> */}
        {/* <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6 text-sm"> */}
          <div>
            <span>&copy; 2020 ACME, Inc. All rights reserved.</span>
          </div>
          {/* <div className="flex items-center text-primary text-sm">
            <span className="text-primary">Created by</span>
            <a
              rel="noopener noreferrer"
              href="https://vercel.com"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-primary"
            >
              <Vercel
                className="inline-block h-6 ml-3 text-primary"
                alt="Vercel.com Logo"
              />
            </a>
          </div> */}
        {/* </div> */}
      </Container>
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
