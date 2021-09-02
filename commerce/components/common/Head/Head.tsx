import { FC } from 'react'
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
      
        <link rel="manifest" href={link} />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>{title}</title>
      </NextHead>
    </>
  )
}

export default Head
