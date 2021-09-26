import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import laptop1 from '../public/assets/img/laptop1.png'

import { Layout } from '@components/common'

import Link from 'next/link'
import { dataOfProducts } from '../data1'
import Head from 'next/head'

import SimpleCard from '@components/common/LooperCard/SimpleCard/SimpleCard'
import Image from 'next/image'
import laptop from '../public/assets/img/mobile1.png'
import RSideDetails from '@components/common/Products/SingleProduct/RSideDetails'
import TopLayer from '@components/common/Products/SingleProduct/TopLayer'
import SideLinks from '@components/common/Productpage/SideLinks/SideLinks'
import CheckBoxes from '@components/common/Productpage/CheckBoxes/CheckBoxes'
import PheadDetails from '@components/common/Productpage/PheadDetails/PheadDetails'
import MainProduct from '@components/common/Products/MainProduct/MainProduct'
import { Rating } from '@components/ui'
import Rate from '@components/common/Rateicons/Rate'
import { Ch } from '@components/testing/Ch'
import axios from 'axios'
import { getUserProfile } from '../utils'

// Function to fetch test posts
const fetchPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data
}

// Main Func
const producti = ({ posts }: any) => {
  const { data } = useQuery('posts', fetchPosts, {
    initialData: posts,
  })

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <div className="md:p-10 p-5 sm:p-7 bg-gray-100">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <title>Page Products</title>
      </Head>
      {/* <Ch handleFilters={filters=>handleFilter} /> */}
      {/* <Rate /> */}

      {/* Links */}
      <div className="bg-white my-4 p-4 flex flex-col md:flex-row justify-around rounded-md md:shadow-sm align-center divide-y divide-gray-300 md:divide-y-0">
        {dataOfProducts.linksOfProducts.links.map((l, i) => (
          <Link key={i} href="!#">
            <a className="text-black text-center text-sm font-base py-2 md:py-0 flex flex-row items-center gap-2">
              <span className="material-icons inline-block text-black md:mr-2 ml-1 mr-1">
                {l.icon}
              </span>
              {l.link}
            </a>
          </Link>
        ))}
      </div>
      {/* REFURBHISHED IPHONE 11 */}
      {/* <PheadDetails /> */}
      {/* MAIN PRODUCT */}

      {/*  All PRODUCTS  */}
      <div className="mb-4">
        <div className="mb-6">
          <Link href="!#">
            <a className="my-4 text-black text-2xl">All Products</a>
          </Link>
        </div>

        {/* Grid */}
        <div className="md:grid md:grid-cols-4 sm:grid sm:grid-cols-3 grid-cols-2">
          {/* Single columns */}
          <div className="md:col-span-1 sm:col-span-1 md:bg-transparent pt-2">
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

          {/* Triple columns */}
          <div className="md:col-span-3 sm:col-span-2">
            <div className="md:p-4 rounded-md sm:grid-cols-2 md:grid-cols-3 md:bg-transparent gap-4 grid">
              {dataOfProducts.relatedProducts.map((product, i) => (
                <SimpleCard key={i} product={product} />
              ))}
            </div>
          </div>
        </div>
        {/* {data?.map((post: any) => (
          <h1 key={post.id}>{post.title}</h1>
        ))} */}
      </div>
    </div>
  )
}

// Test fetching from API
export const getStaticProps = async () => {
  try {
    const data = await fetchPosts()
    return {
      props: {
        posts: data,
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default producti
producti.Layout = Layout

{
  /* <div className="my-6 grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        <div className="md:p-8 sm:p-4 md:col-span-2 sm:col-span-1 bg-white rounded-md">
   
          <TopLayer />

          <div className="md:mb-4 md:flex md:flex-1 md:flex-row md:justify-between md:items-center sm:flex-col">
           
            <div className="mx-auto w-20 h-80 flex">
              <Image src={laptop} />
            </div>

     

            <RSideDetails />
          </div>

          <button className="inline-block md:right-3 text-center md:relative mt-4 bg-violet rounded-sm md:w-1/3 sm:w-full py-2 hover:bg-violet-700 text-white">
            See more
          </button>
        </div>

        <div className="md:p-6 md:rounded-md bg-white">
          Lorem, ipsum dolor.lorem Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iusto, excepturi vel, reprehenderit nemo hic vero
          expedita suscipit amet blanditiis voluptas assumenda, atque numquam
          saepe porro animi. Cum rem dolores voluptatibus.
        </div>
      </div> */
}
