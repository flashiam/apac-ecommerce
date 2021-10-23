import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import laptop1 from '../public/assets/img/laptop1.png'
import laptop2 from '../public/assets/img/laptop2.png'
import cn from 'classnames'
import { Layout } from '@components/common'
import { useSelector } from 'react-redux'
import { GlobalState } from 'data1'
import { data } from 'autoprefixer'

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
  //   const orderedItems: OrderItems[] = [
  //     {
  //       id: '1200',
  //       productName: 'Xiaomi Redmi Y2',
  //       price: '45',
  //       quantity: '12',
  //       delivered: true,
  //       img: laptop1,
  //     },
  //     {
  //       id: '778',
  //       productName: 'MacBook',
  //       price: '235',
  //       quantity: '1',
  //       delivered: false,
  //       img: laptop2,
  //     },
  //   ]

  const router = useRouter()
  // const { orderid } = router.query
  const { cartItems, totalCartPrice } = useSelector(
    (state: GlobalState) => state.product
  )
  const { savedAddresses } = useSelector(
    (state: GlobalState) => state.customers
  )
  const {
    orderid,
    selectedAddress,
    orderedItems,
    charges: { tax, shippingCharge },
  } = useSelector((state: GlobalState) => state.payment)

  return (
    <div className="bg-gray-100 sm:p-8 p-5">
      <div className="md:max-w-5xl md:p-0  mx-auto">
        <h2 className="text-3xl font-bold my-1">Your order is placed</h2>

        <h5 className="text-2xl text-gray-500 font-semibold my-1">
          Order #{orderid || 1753}
        </h5>
        <p className="text-gray-400 font-semibold text-lg">
          Order Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </p>
        <div className="md:flex md:flex-row md:justify-between sm:flex-col sm:justify-between flex flex-col">
          <div className=" md:w-8/12 w-full bg-white  block md:p-8 sm:p-6 duration-150 transition-shadow shadow-md rounded-lg p-5">
            {orderedItems.map(({ id, name, quantity, price, img }, i) => (
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
                      <h5 className="text-black text-xl font-bold">{name}</h5>

                      <span className="text-gray-900 flex justify-between ">
                        <span className="text-sm">Price </span>
                        <span className="text-sm text-gray-700 font-base">
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
            ))}

            {/* Order summary */}
            <div className="sm:flex sm:justify-between sm:gap-3 w-full  sm:mb-5 mb-10">
              <div className="rounded-md md:p-4 sm:p-3 p-4  bg-gray-100 shadow-md md:w-1/2 w-full mb-3">
                <h3 className="text-sm font-semibold text-gray-800 my-1">
                  Summary
                  <div
                    style={{ height: 1 }}
                    className="my-2 w-full bg-gray-600 "
                  ></div>
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
                    <div
                      style={{ height: 1 }}
                      className="my-1 w-full bg-gray-600 "
                    ></div>
                    <h3 className="text-lg text-gray-900 font-semibold">
                      Total
                    </h3>
                  </div>
                  {/* Second Child */}

                  <div className="">
                    <h6 className="text-xs text-gray-400 font-base">
                      ${totalCartPrice}
                    </h6>
                    <h6 className="text-xs text-gray-400 font-base">${tax}</h6>
                    <h6 className="text-xs text-gray-400 font-base">
                      ${shippingCharge}
                    </h6>
                    <div
                      style={{ height: 1 }}
                      className="my-1 w-full bg-gray-600 "
                    ></div>
                    <h3 className="text-lg text-gray-900 font-semibold ">
                      ${totalCartPrice + tax + shippingCharge}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-md md:p-4 sm:p-3 p-4  bg-gray-100 shadow-md md:w-1/2 w-full">
                <h3 className="text-sm font-semibold text-gray-800 my-1">
                  Shipping
                </h3>
                <div style={{ height: 1 }} className="my-2 w-full bg-gray-600 ">
                  <ul className="text-sm">
                    <li>
                      {selectedAddress?.houseno} near{' '}
                      {selectedAddress?.landmark}
                    </li>
                    <li>
                      {selectedAddress?.street}, {selectedAddress?.city} (
                      {selectedAddress?.state})
                    </li>
                    <li>{selectedAddress?.pincode}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <aside className="md:m-0 mt-5 md:w-3/12 sm w-full rounded-md p-3 bg-gray-300 shadow-md ">
            <div className="mb-2 rounded-md bg-white p-2">
              <h3 className="text-sm font-semibold text-gray-800">
                Order Billing
              </h3>
              <div
                className="w-full bg-gray-300 my-2"
                style={{ height: '1px' }}
              ></div>

              <h4 className="text-md font-semibold"></h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                ducimus?
              </p>
            </div>

            <div className="bg-white p-2 rounded-md">
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

        {/* Activity */}
        <div className="mt-8 rounded-md p-3 bg-white shadow-md ">
          <div className="flex justify-between">
            <h2 className="text-sm font-semibold">Activity</h2>
            <h2 className="text-lg font-semibold text-gray-500">
              Order Tracking
            </h2>
          </div>
          <p className="text-sm font-base my-1">
            {' '}
            <span className="w-2 h-2 rounded-full bg-green mr-2 inline-block"></span>
            <span className="inline-block text-gray-600 mr-2 ">Today</span>{' '}
            <span>Order Placed</span>
          </p>

          <div className="h-24 w-1 bg-green"></div>
          <p className="text-gray-600 text-sm font-base my-1">
            {' '}
            <span className="w-2 h-2 rounded-full bg-blue mr-2 inline-block"></span>
            Dispatched
          </p>
          <div className="h-24 w-1 bg-blue"></div>

          <p className="text-gray-600 text-sm font-base my-1">
            {' '}
            <span className="w-2 h-2 rounded-full bg-pink-light mr-2 inline-block"></span>
            Arriving
          </p>
          <div className="h-24 w-1 bg-pink-light "></div>

          <p className="text-gray-500 text-sm font-semibold my-1">
            {' '}
            <span className="w-2 h-2 rounded-full bg-red mr-2 inline-block"></span>
            Delivered
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails

OrderDetails.Layout = Layout
