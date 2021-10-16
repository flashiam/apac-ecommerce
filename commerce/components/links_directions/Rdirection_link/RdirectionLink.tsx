import React from 'react'
import Link from 'next/link'
interface Props {
  linkText: string
}

const RdirectionLink = ({ linkText }: Props) => {
  return (
    <div className="flex md:justify-end  justify-center text-sm">
      <Link href="/bestdeals/bestproducts">
        <a className="text-black md:text-lg md:font-semibold sm:font-semibold font-base my-3">
          {linkText}
        </a>
      </Link>
    </div>
  )
}

export default RdirectionLink
