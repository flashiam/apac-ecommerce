import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

interface Props {
  color?: string
}

const CartButton: FC<Props> = ({ color }) => {
  const router = useRouter()
  return (
    <>
      <Link href="/cart/111">
        {/* <span className="material-icons-outlined relative cursor-pointer">
shopping_cart
<span className="absolute -top-5 w-2 h-2 text-white">5</span>p
</span> */}
        <a className="relative focus:outline-none">
          <i className="material-icons-outlined text-3xl">shopping_cart</i>
          <span className="absolute top-2 right-2 flex justify-center items-center">
            <span
              className={`absolute rounded-full h-4 w-4 ${color}-400`}
            ></span>
            <span
              className={cn(
                'absolute flex justify-center items-center h-4 w-4 rounded-full bg-gray-600 text-xs text-white',
                color
              )}
            >
              4
            </span>
          </span>
        </a>
      </Link>
      {/* <Link href="/cart/111">
        <a>
          <span className="material-icons-outlined relative inline-block text-black">
            shopping_cart
            <span className="absolute -top-2 -right-1 w-4 h-4 rounded-full border-2 border-gray-700 text-white flex items-center justify-center"></span>
          </span>
          <span className="absolute flex justify-center items-center text-black">
            4
          </span>
        </a>
      </Link> */}
    </>
  )
}

export default CartButton
