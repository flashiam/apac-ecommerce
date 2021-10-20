import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import laptop1 from '../public/assets/img/laptop1.png'
import laptop2 from '../public/assets/img/laptop2.png'
import cn from 'classnames'
import { Layout } from '@components/common'

const OrderDetails = () => {
  interface OrderItems {
    id: string
    productName: string
    price: string
    quantity: string
    delivered: boolean
    img: StaticImageData
    link?: string
  }
  const date = new Date()
  const orderedItems: OrderItems[] = [
    {
      id: '1200',
      productName: 'Xiaomi Redmi Y2',
      price: '45',
      quantity: '12',
      delivered: true,
      img: laptop1,
    },
    {
      id: '778',
      productName: 'MacBook',
      price: '235',
      quantity: '1',
      delivered: false,
      img: laptop2,
    },
  ]

  const router = useRouter()
  const { orderid } = router.query

  return (
    <div className="bg-gray-100 sm:p-8 p-6">
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* <h2 className="text-3xl font-bold my-1">Order Details</h2> */}

        <h5 className="text-2xl text-gray-500 font-semibold my-1">
          Order #{orderid || 1753}
        </h5>
        <p className="text-gray-400 font-semibold text-lg">14 Jan 2000</p>
        <div className="flex justify-between">
          <div className="w-8/12 bg-white  block p-3 duration-150 transition-shadow shadow-md rounded-lg">
            {orderedItems.map(
              ({ id, productName, quantity, delivered, price, img }, i) => (
                <Link key={i} href={`items/${id}`}>
                  <a className="p-3 mb-3 h-30">
                    <div className="flex justify-between items-center gap-3">
                      <div className="w-1/2 h-1/2">
                        <Image
                          src={img}
                          height="100%"
                          width="100%"
                          className="object-contain"
                        />
                      </div>
                      <div className="w-1/2 ">
                        <h5 className="text-black text-xl font-bold">
                          {productName}
                        </h5>

                        <span className="text-gray-900 inline-block mb-1">
                          <span className="text-sm">Price </span>
                          <span className="text-sm text-gray-700 ml-2 font-base">
                            ${price}
                          </span>
                        </span>
                        <span className="flex justify-between items-center mb-1">
                          <span className="text-sm font-semibold ">
                            Quantity{' '}
                          </span>
                          <span className="text-sm font-base font-semibold ">
                            {quantity}
                          </span>
                        </span>
                      </div>
                      {/* <div  className="w-">

                  </div> */}
                    </div>
                    <div
                      className=" w-full bg-gray-300"
                      style={{ height: '1px' }}
                    ></div>
                  </a>
                </Link>
              )
            )}

            {/* Order summary */}
            <div className="flex justify-between gap-3 w-full mb-5">
              <div className="rounded-md md:p-4 sm:p-3 bg-gray-100 shadow-md w-1/2">
                <h3 className="text-sm font-semibold text-gray-800 my-1">
                  Summary
                </h3>

                {/* First Child */}
                <div className="flex justify-between items-center ">
                  <div className="">
                    <h6 className="text-xs text-gray-400 font-base">
                      Subtotal
                    </h6>
                    <h6 className="text-xs text-gray-400 font-base">
                      Shipping
                    </h6>
                    <h6 className="text-xs text-gray-400 font-base">Tax</h6>
                  </div>
                  {/* Second Child */}

                  <div className="">
                    <h6 className="text-xs text-gray-400 font-base">
                      $150.00l
                    </h6>
                    <h6 className="text-xs text-gray-400 font-base">$32.00</h6>
                    <h6 className="text-xs text-gray-400 font-base">$2.30</h6>
                  </div>
                </div>
              </div>

              <div className="rounded-md md:p-4 sm:p-3 bg-gray-100 shadow-md w-1/2">
                <h3 className="text-sm font-semibold text-gray-800 my-1">
                  Shipping
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  ducimus?
                </p>
              </div>
            </div>
            {/* Activity */}
            <div className=" rounded-md p-3 bg-gray-100 shadow-md ">
              <h2 className="text-sm font-semibold">Activity</h2>
              <p className="text-sm font-base">Today</p>
            </div>
          </div>
          <aside className="w-3/12 rounded-md p-3 bg-white shadow-md ">
            <div className="mb-2 rounded-md bg-gray-100 p-2">
              <h3 className="text-sm font-semibold text-gray-800">
                Order Billing
              </h3>
              <div
                className="w-full bg-gray-300 my-1"
                style={{ height: '1px' }}
              ></div>

              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                ducimus?
              </p>
            </div>

            <div className="bg-gray-100 p-2 rounded-md">
              <h3 className="text-sm font-semibold text-gray-800">
                Order Shipping
              </h3>
              <div
                className="w-full bg-gray-300 my-1"
                style={{ height: '1px' }}
              ></div>

              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                ducimus?
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails

OrderDetails.Layout = Layout

{
  /* <p
                      className={cn(
                        'font-semibold text-sm text-right mt-2',
                        delivered ? 'text-red' : 'text-green'
                      )}
                    >
                      {delivered ? 'Delivered' : 'On the way'}
                    </p> */
}
