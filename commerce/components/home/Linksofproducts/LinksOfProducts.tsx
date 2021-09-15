import React, { FC } from 'react'
import Link from 'next/link'

type ProductLinks = {
  link_title: string
  links: string[]
}

type Props = {
  pl: ProductLinks
}

const LinksOfProducts = ({ pl }: Props) => {
  const { link_title, links } = pl
  return (
    <>
      <div className="my-6 text-center">
        <Link href="!#">
          <a className="font-semibold">{link_title}</a>
        </Link>
        {links.map((l, i) => (
          <h3 key={i}>
            {' '}
            <Link href="!#">
              <a className="text-sm text-gray-500">{l}</a>
            </Link>
          </h3>
        ))}
      </div>
    </>
  )
}

export default LinksOfProducts
