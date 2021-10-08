import React, { useEffect } from 'react'

import {server} from "../../config"
import Carousel from '@components/ui/Carousel/Carousel'
// import {getStaticProps }

import {carousels} from "../../data2"
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
import { itemsOfProducts, dataOfProducts ,photos,reviews} from '../../data1'
import type {Big } from '../../data1'
import Rate from '@components/common/Rateicons/Rate'
import { Rating } from '@components/ui'
import Review from '@components/common/Productpage/Review/Review'
import { withRouter,NextRouter,useRouter } from 'next/router'

interface WithRouterProps {
  router: NextRouter
}

interface MyComponentProps extends WithRouterProps {}
// Static path function
// Main Func
const bestDeals = (props:any) => {

  const router = useRouter()
  
  console.log(router)
  const { query: { bid } } = router;
const mainTitle=bid?.toString().toUpperCase()

  return (
    <div className="md:p-10 p-5 sm:p-7 bg-gray-100">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <title>{mainTitle}</title>
      </Head>


      <h1 className="font-medium text-4xl my-10 text-center text-gray-600">OUR {mainTitle}</h1>
      {/* Links */}
      <div className="bg-white my-4 p-4 flex flex-col md:flex-row justify-around rounded-md md:shadow-sm align-center divide-y divide-gray-300 md:divide-y-0">

     
        {dataOfProducts.linksOfProducts.links.map((l:any, i:any) => (
          <h4 key={i} >
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
        <div className="md:grid md:grid-cols-4 sm:grid sm:grid-cols-3 grid grid-cols-2 2xm:grid-cols-1">
          {/* Single columns */}
          <div className="md:col-span-1 sm:col-span-1 md:bg-transparent pt-2 col-span-1">
            {/*SPAN-1 LEFT SIDE LINKS */}
            <div>
              <h2 className="text-black font-medium">Categories</h2>
              {/* Parent */}
              <ul className="list-inside">
                <SideLinks flips={dataOfProducts.linksOfProducts.main} />
              </ul>
              <h1 className="my-2 text-black font-medium text-lg">
                95 PRODUCTS
              </h1>
            </div>
            {/* PRICE */}
            <div></div>
            {/* CONDITION */}
            <CheckBoxes />
          </div>

          {/* Span Triple columns */}
          <div className="md:col-span-3 sm:col-span-2 col-span-1">
            <div className="md:p-4 rounded-md sm:grid-cols-2 md:grid-cols-3  md:bg-transparent gap-4 grid">
              {dataOfProducts.relatedProducts.map((product: any, i: string|number) => (
                <SimpleCard key={i} index={i} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Reviews and posts */}
      <div className="my-6">
        <h2 className="mb-7 text-black font-medium text-xl">
          Ask something about this products
        </h2>
        <Searchbar ph="Your Questions...." />
        {/*Customers reviews  */}
        <div className="mt-7">
          <h3 className="text-black font-medium text-lg">Customer Reviews</h3>
          {/* Customer pic and Name */}
          <div>
            {reviews.map((r, i) => (
              <Review key={i} review={r} />
            ))}
          </div>
        </div>
      </div>

      {/* Review section end */}
    </div>
  )
}

export default bestDeals





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

bestDeals.Layout = Layout

