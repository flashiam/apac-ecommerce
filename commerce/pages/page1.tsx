import React from 'react'

import { Layout } from '@components/common'

import Link from 'next/link'

import Head from 'next/head'

import SimpleCard from '@components/common/LooperCard/SimpleCard/SimpleCard'
import Image from 'next/image'
import laptop from '../public/assets/img/mobile1.png'
// import ListCBox from '@components/common/Checkbox/P_Page/ListCBox'
import RSideDetails from '@components/common/Products/SingleProduct/RSideDetails'
import TopLayer from '@components/common/Products/SingleProduct/TopLayer'
import SideLinks from '@components/common/Productpage/SideLinks/SideLinks'
import CheckBoxes from '@components/common/Productpage/CheckBoxes/CheckBoxes'
import PheadDetails from '@components/common/Productpage/PheadDetails/PheadDetails'

const links = [
  { icon: 'payments', link: 'Installment' },
  { link: '30-day money-back guarantee', icon: 'date_range' },
  { link: '1-year-warranty', icon: 'add_business' },
  { link: 'Free standard shipping', icon: 'local_shipping' },
]

const flips = [
  {
    category: 'Phone',
    main: [
      {
        phone: 'Xiaomi Redmi',

        links: [
          'Redmi Y2',
          'Redmi Y3',
          'Redmi UX',
          'Redmi Ultra',
          'Redmi MaxPro',
        ],
      },
    ],
  },
]

// Main Func
const page1 = () => {
  return (
    <div className="md:p-10 p-5 sm:p-7 bg-gray-100">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <title>Products</title>
      </Head>

      {/* Links */}
      <div className="bg-white my-4 p-4 flex flex-col md:flex-row justify-around rounded-md md:shadow-sm align-center divide-y divide-gray-300 md:divide-y-0">
        {links.map((l, i) => (
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
      <PheadDetails />
      {/* MAIN PRODUCT */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6">
        <div className="p-8 col-span-2 bg-white rounded-md">
          <TopLayer />
          <div className="w-full block md:flex md:flex-row md:items-center md:justify-between">
            {/* IMG */}
            <div className="mx-auto sm:block sm:mx-auto block md:w-1/2 mb-3">
              <Image
                objectFit="scale-down"
                height={250}
                width={300}
                src={laptop}
              />
            </div>

            <RSideDetails />

            <button className="md:hidden sm:block block mt-4 bg-black rounded-sm w-full py-2 hover:bg-black-600 text-white">
              See more
            </button>
          </div>
        </div>
        {/* left container */}
        <div className="p-6 rounded-md bg-white w-full mt-6 md:mt-0">
          Lorem, ipsum dolor.lorem Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iusto, excepturi vel, reprehenderit nemo hic vero
          expedita suscipit amet blanditiis voluptas assumenda, atque numquam
          saepe porro animi. Cum rem dolores voluptatibus.
        </div>
      </div>

      {/*  All PRODUCTS  */}
      <div className="mb-4">
        <div className="mb-6">
          <Link href="!#">
            <a className="my-4 text-black text-2xl">All Products</a>
          </Link>
        </div>

        {/* Grid */}
        <div className="md:grid md:grid-cols-4 sm:grid sm:grid-cols-3">
          {/* Single columns */}
          <div className="md:col-span-1 sm:col-span-1 md:bg-transparent pt-2">
            {/*SPAN-1 LEFT SIDE LINKS */}
            <div>
              <h2 className="text-black font-medium">Categories</h2>
              {/* Parent */}
              <ul className="list-inside">
                <SideLinks flips={flips} />
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
            <div className="md:p-4 rounded-md sm:grid-cols-2 md:grid-cols-3  md:bg-transparent gap-4 grid">
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((val, i) => (
                <SimpleCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page1
page1.Layout = Layout

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
