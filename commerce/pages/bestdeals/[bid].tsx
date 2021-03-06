import React, { useEffect } from 'react'

import { server } from '../../config'
import Carousel from '@components/ui/Carousel/Carousel'
// import {getStaticProps }

import { carousels } from '../../data2'
import { Layout, Searchbar } from '@components/common'

import Link from 'next/link'

import Head from 'next/head'

import SimpleCard from '@components/common/LooperCard/SimpleCard/SimpleCard'
import Image from 'next/image'
import laptop from '../public/assets/img/mobile1.png'

import SideLinks from '@components/common/Productpage/SideLinks/SideLinks'
import CheckBoxes from '@components/common/Productpage/CheckBoxes/CheckBoxes'
// import type { Big } from '../../data1'
import PheadDetails from '@components/common/Productpage/PheadDetails/PheadDetails'
import MainProduct from '@components/common/Products/MainProduct/MainProduct'
import { MProduct } from '../../data1'
import { productsH } from '../../data2'
import type { Big } from '../../data1'
import Rate from '@components/common/Rateicons/Rate'
import { Rating } from '@components/ui'
import Review from '@components/common/Productpage/Review/Review'
import { withRouter, NextRouter, useRouter } from 'next/router'

interface WithRouterProps {
  router: NextRouter
}

interface MyComponentProps extends WithRouterProps {}
// Static path function
// Main Func
const BestDeals = (props: any) => {
  const router = useRouter()

  console.log(router)
  const {
    query: { bid },
  } = router
  const mainTitle = bid?.toString().toUpperCase()

  return (
    <div className="md:p-6 p-5 sm:p-4 bg-gray-100">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <title>{mainTitle}</title>
      </Head>

      <h1 className="font-medium text-4xl my-10 text-center text-gray-600">
        OUR {mainTitle}
      </h1>
      {/* Links */}
      <div className="bg-white my-4 p-4 flex flex-col md:flex-row justify-around rounded-md md:shadow-sm align-center divide-y divide-gray-300 md:divide-y-0">
        {productsH[0].linksOfProducts.links.map((l: any, i: any) => (
          <h4 key={i}>
            <a className="text-black text-center text-sm font-base py-2 md:py-0 flex flex-row items-center gap-2">
              <span className="material-icons inline-block text-black md:mr-2 ml-1 mr-1">
                {l.icon}
              </span>
              {l.link}
            </a>
          </h4>
        ))}
      </div>

      <Carousel carousels={carousels} />

      {/*  All PRODUCTS  */}
      <div className="mb-4">
        <div className="mb-6">
          <Link href="!#">
            <a className="my-4 text-black text-2xl">All Products</a>
          </Link>
        </div>

        {/* Grid */}
        <div className=" md:grid-cols-6 md:gap-0 lg:gap-0 gap-3 sm:grid-cols-4 grid grid-cols-1 xs:grid-cols-1">
          {/* Single columns */}
          <div className=" md:col-span-1 sm:col-span-1 md:bg-transparent pt-2 col-span-1">
            {/*SPAN-1 LEFT SIDE LINKS */}
            <div>
              <h2 className="text-black font-medium">Categories</h2>
              {/* Parent */}
              <ul className="list-inside">
                <SideLinks flips={productsH[0].linksOfProducts.main} />
              </ul>
              <h1 className="my-2 text-black font-medium text-lg">
                95 PRODUCTS
              </h1>
            </div>

            <div className="grid grid-cols-2 md:block sm:block">
              <CheckBoxes />
            </div>
            {/* CONDITION */}
          </div>

          {/* Span Triple columns */}
          <div className="md:col-span-5 sm:col-span-3 col-span-1">
            <div className="rounded-md sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  md:bg-transparent grid-cols-2 md:gap-4 gap-2 sm:gap-3 grid">
              {productsH.map((product: MProduct, i: string | number) => (
                <SimpleCard key={i} index={i} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div
        className="flex justify-around items-center my-4"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <Link href="#!">
          <a className="border-2 p-2 bg-white font-semibold">Prev</a>
        </Link>
        {[1, 2, 3, 5, 6, 7].map((n, i) => (
          <Link href={`/bestdeals/${i}`} key={i}>
            <a className="border-2 p-2 font-semibold bg-white">{n}</a>
          </Link>
        ))}

        <Link href="#!">
          <a className="border-2 p-2 bg-white font-semibold">Next</a>
        </Link>
      </div>

      {/* Review section end */}
    </div>
  )
}

export default BestDeals

//   {/* Reviews and posts */}
//   <div className="my-6">
//   <h2 className="mb-7 text-black font-medium text-xl">
//     Ask something about this products
//   </h2>
//   <Searchbar ph="Your Questions...." />
//   {/*Customers reviews  */}
//   <div className="mt-7">
//     <h3 className="text-black font-medium text-lg">Customer Reviews</h3>
//     {/* Customer pic and Name */}
//     <div>
//       {reviews.map((r, i) => (
//         <Review key={i} review={r} />
//       ))}
//     </div>
//   </div>
// </div>

// // Static paths function
// export const getStaticPaths = async () => {
//   try {
//     // const rest = await Promise.resolve(itemsOfProducts)
// const data=await fetch("http://localhost:3000/api/items")
//     const jsonData = await data.json();
//     // console.log(jsonData)
//     const ids= jsonData?.map((p:any) => (p.id)) // [{params: {id: 1}},{params: {id: 2}}]
//     const paths = ids.map((id: any) => ({ params: { bid:id.toString() } }));
//     console.log(paths);
//     return {
//        paths:paths,
//       fallback: false,
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }
// // Static props function
// export const getStaticProps = async({ params: { id } }:any) => {
//   // console.log(props)
//   try {
//     // const res = await Promise.resolve(itemsOfProducts)

//     const data=await fetch(`${server}/api/items/${id}`)
//     const res = await data.json();
//     console.log(res)
//     return {
//       props: {
//         res
//       },
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }

// // Static paths function
// export const getStaticPaths = async () => {
//   try {
//     const rest = await Promise.resolve(itemsOfProducts)

//     const idPaths = rest?.map((product) => ({
//       params: { id: product.id.toString() },
//     })) // [{params: {id: 1}},{params: {id: 2}}]
//     // console.log(idPaths)
//     return {
//        idPaths,
//       fallback: false,
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }
// // Static props function
// export const getStaticProps = async (props: any) => {
//   // console.log(props)
//   try {
//     const res = await Promise.resolve(itemsOfProducts)
//     return {
//       props: {
//         res,
//       },
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }

BestDeals.Layout = Layout
