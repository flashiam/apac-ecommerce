import React from 'react'
import Link from 'next/link'
interface Props {
  linkText: string
}

const RdirectionLink = ({ linkText }: Props) => {
  return (
    <div className="flex sm:justify-end  justify-center text-sm">
      <Link href="/bestdeals/bestproducts">
        <a className="duration-200 hover:text-gray-900 hover:border-b-2 hover:border-accent-3 border-b-2 border-transparent text-gray-500 md:text-lg md:font-semibold sm:font-semibold font-base my-3">
          {linkText}
        </a>
      </Link>
    </div>
  )
}

export default RdirectionLink
