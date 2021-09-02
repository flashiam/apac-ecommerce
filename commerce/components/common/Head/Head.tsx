import { FC, PropsWithChildren } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

type Props={
  link?:string,
  title?:string,
}
const Head:FC<Props> = ({link,title}) => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="manifest" href="/site.webmanifest" key="site-manifest" /> */}
        <link rel="manifest" href={link} />
        <title>{title}</title>
      </NextHead>
    </>
  )
}

export default Head
