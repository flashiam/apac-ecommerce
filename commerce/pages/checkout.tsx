import React, { useEffect } from 'react'
import Image from 'next/image'
import { Layout } from '@components/common'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Button } from '@components/ui'
import PaypalCheckout from '@components/PaypalCheckout'
import { GlobalState } from 'data1'
import { calcCartTotal } from 'actions/productAction'

const Checkout = () => {
  const product = useSelector((state: GlobalState) => state.product)
  const dispatch = useDispatch()
  const { totalCartPrice, cartItems } = product

  useEffect(() => {
    dispatch(calcCartTotal(cartItems))
  }, [dispatch, cartItems])

  return (
    <main
      className="md:p-10 sm:p-8 p-6"
      style={{ maxWidth: '1240px', margin: '0 auto' }}
    >
      <Text variant="pageHeading">Checkout</Text>
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="w-2/6">
          <PaypalCheckout />
        </div>
        <div className="grid grid-cols-1 gap-3 w-full lg:w-5/12">
          {/* Order summary */}
          <div className="bg-gray-50 py-2 px-4 rounded-md">
            <Text variant="sectionHeading">Order Summary</Text>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center mb-2 bg-white p-2 rounded-sm"
              >
                <div className="h-14 w-14">
                  <Image src={item.img} alt="phone" />
                </div>
                <div className="ml-2">
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <span className="text-sm">
                    Quantity: <span>{item.quantity}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* promocode */}
          <div className="flex items-center justify-between bg-gray-50 py-2 px-4 rounded-md">
            <input
              type="text"
              name="promo"
              className="w-1/2"
              placeholder="Apply promocode/coupon"
            />
            <Button>Apply</Button>
          </div>
          {/* Summary */}
          <div className="grid grid-cols-1 gap-3 bg-gray-50 py-2 px-4 rounded-md">
            <div className="flex justify-between">
              <span className="text-md font-semibold">Subtotal</span>
              <span className="text-md font-semibold">${totalCartPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-md font-semibold">Tax</span>
              <span className="text-md font-semibold">$1.52</span>
            </div>
            <div className="flex justify-between">
              <span className="text-md font-semibold">Shipping</span>
              <span className="text-md font-semibold">$0.00</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-bold">
                ${totalCartPrice + 1.52}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Checkout
Checkout.Layout = Layout
