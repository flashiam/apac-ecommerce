import React, { useEffect, FC, useState } from 'react'
import router from 'next/router'
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
import { otherCat, pCarousel, productsH } from 'data2'
import OtherCat from '@components/home/Catofproducts/Other/OtherCat'
// import RdirectionLink from '@components/links_directions/Ldirection_link/directionLink'
import RdirectionLink from '@components/links_directions/Rdirection_link/RdirectionLink'
type Props = {
  id: string
  loading: boolean
}
// Static path function
// Main Func
const ProductPage = ({ id, loading, ...props }: Props) => {
  const [products, setProducts] = useState<MProduct[]>(productsH)
  const [product, setProduct] = useState<MProduct>()
  // Destructuring products
  // console.log(res)

  // State for related product props.params.id
  const [related, setRelated] = useState<MProduct[]>([])

  // Function to store related products
  const storeRelatedProducts = () => {
    const relProducts = product?.relatedProducts.flatMap((rel) =>
      productsH.filter((product) => product.id === rel.id)
    )
    relProducts && setRelated(relProducts)
  }

  useEffect(() => {
    setProduct(products?.filter((product) => product.id === id)[0])
    storeRelatedProducts()
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
        {product?.linksOfProducts?.links.map((l: FirstLink, i: number) => (
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
      <PheadDetails pname={product?.name || ''} />
      {/* MAIN PRODUCT Grid Change to div */}
      <div className="my-6">
        <div className="p-6 bg-white rounded-md">
          {product && <MainProduct main={product} rev={reviews[0].photos} />}
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
            {product?.comments?.reviews}
          </p>
        </div>
        <div className="my-5 md:block h-0.5 w-full bg-gray-400 sm:hidden"></div>
        {/* Customer Comments */}
        <div>
          <h4 className="my-1 text-black text-sm font-bold">
            {product?.comments?.customers.name}
          </h4>
          <blockquote className="my-1 text-gray text-xs font-thin">
            {product?.comments?.customers.msg}
          </blockquote>
        </div>

        <button
          className="mt-9 mx-auto block border-2 border-black rounded-sm w-full md:w-1/2 py-2 transition-colors duration-200 ease-in hover:bg-black
          hover:text-white text-black"
        >
          See Review
        </button>
      </div>

      {/* Desktop view */}
      {/* Other Categories */}
      <div className="my-8">
        <span className="text-black sm:text-xl pb-1 font-semibold border-b-2 border-accent-3 lg:text-2xl md:text-xl inline-block my-3">
          Related Products
          {/* <span className="text-gray-400 text-sm">
            {' '}
            -Nothing lost, everything gained, and all refurbished.
          </span> */}
        </span>
        {/* <div className="mb-4 w-full bg-gray-500" style={{ height: 1 }}></div> */}

        <div className="md:grid-cols-12 md:grid sm:grid sm:grid-cols-6 hidden lg:gap-5 md:gap-4 gap-2">
          {otherCat.map((other, i) => (
            <OtherCat key={i} numIndex={i} otherCat={other} />
          ))}
        </div>
        <RdirectionLink linkText="See More" />
      </div>

      {/* For Mobo */}
      {!!related.length && (
        <div className="my-5 block sm:hidden">
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
                      {/* <h3 className="text-black text-md">{p.name}</h3> */}
                      <h3 className="text-black text-sm font-semibold">
                        {p.name}
                      </h3>
                      <p className="text-black text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
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

export default ProductPage

// Static paths function
export const getStaticPaths = async () => {
  // const rest = await Promise.resolve(itemsOfProducts)
  try {
    const data = await fetch(`${server}/api/items`)
    const jsonData = await data.json()
    const ids = jsonData?.map((p: any) => p.id) // [{params: {id: 1}},{params: {id: 2}}]
    const paths = ids.map((id: any) => ({ params: { id: id.toString() } }))
    return {
      paths,
      fallback: false,
    }
  } catch (err) {
    console.log(err)
    const paths = productsH.map((product) => ({ params: { id: product.id } }))
    return {
      paths,
      fallback: true,
    }
  }
}
// Static props function
export const getStaticProps = async ({ params: { id } }: any) => {
  console.log(id)
  try {
    // const res = await Promise.resolve(itemsOfProducts)
    // const data = await fetch(`${server}/api/items/${id}`)
    // const res = await data.json()

    return {
      props: {
        id,
      },
    }
  } catch (err) {
    console.error(err)
  }
}

ProductPage.Layout = Layout

{
  /* <div className="h-32 w-20 mx-auto">
<Image src={img} />
</div>
<div>
<h3 className="text-black text-sm font-semibold">{name}</h3>
<p className="text-black text-xs">{details}</p>
</div> */
}
