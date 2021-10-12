import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { ProductState, CartProduct, GlobalState } from 'data1'
import { fetchCartItems } from '../../../actions/productAction'

interface Props {
  color?: string
}

const CartButton: FC<Props> = ({ color }) => {
  const [updatedProducts, setUpdatedProducts] = useState<ProductState>()
  // Hooks for redux
  const dispatch = useDispatch()
  const product: ProductState = useSelector(
    (state: GlobalState) => state.product
  )
  const { cartItems } = product
  // const { cartItems } = product

  return (
    <>
      <Link href="/cart">
        {/* <span className="material-icons-outlined relative cursor-pointer">
          shopping_cart
          <span className="absolute -top-5 w-2 h-2 text-white">5</span>p
          </span> */}
        <a className="relative focus:outline-none">
          <i className="material-icons-outlined text-3xl">shopping_cart</i>
          <span className="absolute top-2 right-2 flex justify-center items-center">
            {!!cartItems?.length && (
              <>
                <span
                  className={`absolute animate-ping rounded-full h-4 w-4 ${color}-400`}
                ></span>
                <span
                  className={cn(
                    'absolute flex justify-center items-center h-4 w-4 rounded-full bg-gray-600 text-xs text-white',
                    color
                  )}
                >
                  {cartItems?.length}
                </span>
              </>
            )}
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
