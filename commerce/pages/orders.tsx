import type { GetStaticPropsContext } from 'next'
import commerce from '@lib/api/commerce'
import { Bag } from '@components/icons'
import { Layout } from '@components/common'
import { Container, Quantity, Text } from '@components/ui'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import cn from 'classnames'
import iphone from '../public/assets/img/iphone.png'
import laptop1 from '../public/assets/img/laptop1.png'
import laptop2 from '../public/assets/img/laptop2.png'
import laptop3 from '../public/assets/img/laptop3.png'
import laptop4 from '../public/assets/img/laptop4.png'
import { GlobalState } from 'data1'
export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise

  return {
    props: { pages, categories },
  }
}

export default function Orders() {
  interface OrderItems {
    id: string
    productName: string
    price: string
    quantity: string
    delivered: boolean
    img: StaticImageData
    link?: string
  }

  const orderedItems = useSelector(
    (state: GlobalState) => state.payment.orderedItems
  )

  // const orderedItems: OrderItems[] = [
  //   {
  //     id: '1200',
  //     productName: 'Xiaomi Redmi Y2',
  //     price: '45',
  //     quantity: '12',
  //     delivered: true,
  //     img: iphone,
  //   },
  //   {
  //     id: '778',
  //     productName: 'MacBook',
  //     price: '235',
  //     quantity: '1',
  //     delivered: false,
  //     img: laptop1,
  //   },
  //   {
  //     id: '1200',
  //     productName: 'Iphone',
  //     price: '15',
  //     quantity: '5',
  //     delivered: true,
  //     img: laptop2,
  //   },
  //   {
  //     id: '1200',
  //     productName: 'Xiaomi Redmi Y2',
  //     price: '45',
  //     quantity: '12',
  //     delivered: false,
  //     img: laptop3,
  //   },
  //   {
  //     id: '1200',
  //     productName: 'ASUS laptop',
  //     price: '445',
  //     quantity: '1',
  //     delivered: false,
  //     img: laptop4,
  //   },
  //   {
  //     id: '1200',
  //     productName: 'Iphone',
  //     price: '17',
  //     quantity: '3',
  //     delivered: true,
  //     img: iphone,
  //   },
  //   {
  //     id: '1200',
  //     productName: 'Xiaomi Redmi Y1',
  //     price: '4',
  //     quantity: '6',
  //     delivered: true,
  //     img: iphone,
  //   },
  //   {
  //     id: '1200',
  //     productName: 'Xiaomi Redmi Y7',
  //     price: '15',
  //     quantity: '7',
  //     delivered: true,
  //     img: laptop1,
  //   },
  // ]
  return (
    <div className="bg-gray-100 sm:p-8 p-6">
      <h1 className="text-4xl font-bold my-4">My Orders</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
        {orderedItems.map(
          ({ id, name, quantity, delivered, price, img }, i) => (
            <Link key={i} href={`items/${id}`}>
              <a className="bg-white   block p-5 duration-150 transition-shadow shadow-lg rounded-lg">
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
                    {/* <div className="w-20 h-40 mx-auto"> */}

                    {/* </div> */}
                    {/* <h3 className="text-black-700 font-medium">Xiaomi XR</h3> */}
                    <span className="text-gray-900 text-lg font-normal inline-block my-1">
                      <span>Price </span>
                      <span className="text-gray-700 ml-2 font-normal">
                        ${price}
                      </span>
                    </span>
                    <span className="flex justify-between items-center my-1">
                      <span className="text-sm font-semibold ">Quantity </span>
                      <span className="text-sm font-base font-semibold ">
                        {quantity}
                      </span>
                    </span>
                    <p
                      className={cn(
                        'font-semibold text-sm text-right mt-2',
                        delivered ? 'text-red' : 'text-green'
                      )}
                    >
                      {delivered ? 'Delivered' : 'On the way'}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          )
        )}
      </div>
    </div>

    // <Container>
    //   <Text variant="pageHeading">My Orders</Text>
    //   <div className="flex-1 p-24 flex flex-col justify-center items-center ">
    //     <span className="border border-dashed border-secondary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-primary text-primary">
    //       <Bag className="absolute" />
    //     </span>
    //     <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
    //       No orders found
    //     </h2>
    //     <p className="text-accent-6 px-10 text-center pt-2">
    //       Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
    //     </p>
    //   </div>
    // </Container>
  )
}

Orders.Layout = Layout
