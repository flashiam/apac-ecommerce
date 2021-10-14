import React, { useEffect, FC, useState } from 'react'

import laptop1 from '../../public/assets/img/laptop2.png'
import laptop2 from '../../public/assets/img/laptop1.png'
import p1 from '../../public/assets/profile/p1.jpg'
import p2 from '../../public/assets/profile/p2.jpg'
import p3 from '../../public/assets/profile/p3.jpg'
import p4 from '../../public/assets/profile/p4.jpg'
// import {getStaticProps }
import { Layout, Searchbar } from '@components/common'
import { server } from '../../config/index'
import Link from 'next/link'

import Head from 'next/head'

import SimpleCard from '@components/common/LooperCard/SimpleCard/SimpleCard'
import Image from 'next/image'
import laptop from '../public/assets/img/mobile1.png'
import RSideDetails from '@components/common/Products/SingleProduct/RSideDetails'
import TopLayer from '@components/common/Products/SingleProduct/TopLayer'
import SideLinks from '@components/common/Productpage/SideLinks/SideLinks'
import CheckBoxes from '@components/common/Productpage/CheckBoxes/CheckBoxes'
// import type { Big } from '../../data1'
import PheadDetails from '@components/common/Productpage/PheadDetails/PheadDetails'
import MainProduct from '@components/common/Products/MainProduct/MainProduct'
import {
  // itemsOfProducts,
  // dataOfProducts,
  photos,
  reviews,
  MProduct,
  FirstLink,
} from '../../data1'
import type { Big } from '../../data1'
import Rate from '@components/common/Rateicons/Rate'
import { Rating } from '@components/ui'
import Review from '@components/common/Productpage/Review/Review'
import ProductCarousel from '@components/ui/Carousel/ProductCarousel'
import AppCard from '@components/ui/AppCard/AppCard'
import { pCarousel, productsH } from 'data2'

type Props = {
  res: MProduct
}
// Static path function
// Main Func
const productPage = ({ res }: Props) => {
  // Destructuring products
  const { relatedProducts, linksOfProducts } = res
  // console.log(res)

  // State for related product
  const [related, setRelated] = useState<MProduct[]>([])

  // Function to store related products
  const storeRelatedProducts = () => {
    const products = relatedProducts.flatMap((rel) =>
      productsH.filter((product) => product.id === rel.id)
    )
    setRelated(products)
  }

  useEffect(() => {
    storeRelatedProducts()
    console.log(res)
  }, [])

  return (
    <div className="md:px-14 px-5 py-5 sm:px-7 dark:bg-gray-900 bg-gray-200">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <title>Products</title>
      </Head>

      {/* Links */}
      <div className="bg-white my-4 p-4 flex flex-col md:flex-row justify-around rounded-md md:shadow-sm align-center divide-y divide-gray-300 md:divide-y-0">
        {linksOfProducts?.links.map((l: FirstLink, i: number) => (
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
      {/* REFURBHISHED Product Name */}
      <PheadDetails pname={res.name} />
      {/* MAIN PRODUCT Grid Change to div */}
      <div className="my-6">
        <div className="p-6 bg-white rounded-md">
          <MainProduct main={res} rev={reviews[0].photos} />
        </div>
      </div>
      {/*  Main container */}
      <div className="p-6 rounded-md bg-white w-full mt-6">
        <div>
          {/* Rating */}
          <div>
            <Rate />
          </div>
          <p className="my-2 text-gray-600 font-light text-xs">
            {res.comments?.reviews}
          </p>
        </div>
        <div className="my-5 md:block h-0.5 w-full bg-gray-400 sm:hidden"></div>
        {/* Customer Comments */}
        <div>
          <h4 className="my-1 text-black text-sm font-bold">
            {res.comments?.customers.name}
          </h4>
          <blockquote className="my-1 text-gray text-xs font-thin">
            {res.comments?.customers.msg}
          </blockquote>
        </div>

        <button
          className="mt-9 mx-auto block border-2 border-black rounded-sm w-full md:w-1/2 py-2 transition-colors duration-200 ease-in hover:bg-black
          hover:text-white text-black"
        >
          See Review
        </button>
      </div>

      {/* For Mobo */}
      {!!related.length && (
        <div className="my-5">
          <h1 className="text-xl mb-5 font-medium text-black">
            Related Products
          </h1>
          <ProductCarousel>
            {related.map((p, i) => (
              <div key={i} className="keen-slider__slide w-3/12 slide">
                <Link href={`/items/${p.id}`}>
                  <a>
                    <AppCard>
                      <div className="h-20 w-20">
                        <Image height="100%" width="100%" src={p.img} />
                      </div>
                      <h3 className="text-black text-md">{p.name}</h3>
                    </AppCard>
                  </a>
                </Link>
              </div>
            ))}
          </ProductCarousel>
        </div>
      )}
      {/* Reviews and posts */}
      <div className="my-5">
        <h2 className="mb-5 text-black font-medium text-xl">
          Ask something about this products
        </h2>
        <Searchbar ph="Your Questions...." />
        {/*Customers reviews  */}
        <div className="my-5">
          <h3 className="block text-black mb-5 font-medium text-xl">
            Customer Reviews
          </h3>
          {/* Customer pic and Name */}
          <div>
            {reviews.slice(0, 3).map((r, i) => (
              <Review key={i} review={r} />
            ))}
            <Link href="/reviews">
              <a className="flex items-center hover:text-gray-700 duration-200 text-gray-700 font-semibold text-lg">
                {' '}
                See More Reviews{' '}
                <span className="material-icons">chevron_right</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Review section end */}
    </div>
  )
}

export default productPage

// Static paths function
export const getStaticPaths = async () => {
  try {
    // const rest = await Promise.resolve(itemsOfProducts)
    const data = await fetch(`${server}/api/items`)
    const jsonData = await data.json()
    // console.log(jsonData)
    const ids = jsonData?.map((p: any) => p.id) // [{params: {id: 1}},{params: {id: 2}}]
    const paths = ids.map((id: any) => ({ params: { id: id.toString() } }))
    console.log(paths)
    return {
      paths: paths,
      fallback: false,
    }
  } catch (err) {
    console.error(err)
  }
}
// Static props function
export const getStaticProps = async ({ params: { id } }: any) => {
  // console.log(props)
  try {
    // const res = await Promise.resolve(itemsOfProducts)

    const data = await fetch(`${server}/api/items/${id}`)
    const res = await data.json()
    // console.log(res)
    return {
      props: {
        res,
      },
    }
  } catch (err) {
    console.error(err)
  }
}

productPage.Layout = Layout
