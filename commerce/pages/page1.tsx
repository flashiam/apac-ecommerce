import React from 'react'
import { Layout } from '@components/common'
import Link from 'next/link'
import Head from 'next/head'
import SimpleCard from '@components/common/LooperCard/SimpleCard/SimpleCard'
import Image from 'next/image'
import laptop from '../public/assets/img/mobile1.png'
import ListCBox from '@components/common/Checkbox/P_Page/ListCBox'
import RSideDetails from '@components/common/Products/SingleProduct/RSideDetails'
import TopLayer from '@components/common/Products/SingleProduct/TopLayer'
const links = [
  'Installment',
  '30-day money-back guarantee',
  '1-year-warranty',
  'Free standard shipping',
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

const iphonesLinks = ['iphone10', 'iphone11', 'iphone11 pro', 'iphone11 max']
const conditions = ['All', 'Excellenet', 'Good', 'Fair']
const iwantphone = ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J']
const storage = ['32gb', '64gb', '128gb', '228gb']
const colorOfPhone = ['Red', 'Blue', 'Purple', 'Green']
const delievery = [
  'All',
  'Two days',
  'Three days',
  'Five days',
  'More than five days',
]
const warranty = [1, 2, 3]

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
            <a className="text-black text-sm font-light py-2 md:py-0 flex flex-row md:flex-col items-center">
              <i className="material-icons text-black md:mr-0 mr-2">home</i>
              {l}
            </a>
          </Link>
        ))}
      </div>
      {/* REFURBHISHED IPHONE 11 */}
      <div className="mb-4">
        <h1 className="text-black font-medium text-2xl">
          Refurbished iPhone 11
        </h1>
        <p className="my-4 text-gray text-sm font-light text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          magnam!
        </p>
        <div className="px-8 py-4 bg-white border-2 border-gray">
          <h2 className="text-medium">I need a phone that works with ...</h2>
        </div>
      </div>
      {/* MAIN PRODUCT */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6">
        <div className="p-8 col-span-2 bg-white rounded-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-black font-medium">
              Our very best Refurbished iPhone 11:
            </h2>

            <div className="h-20 w-20 text-white bg-green rounded-full flex items-center text-2xl justify-center">
              -28%
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mx-auto w-20 h-33 mb-3 md:mb-0">
              <Image objectFit="scale-down" src={laptop} />
            </div>
            <div className="md:w-1/2 w-full">
              <h1 className="text-2xl text-black">iPhone 11 64GB - Black</h1>
              <p className="my-2 text-gray-600 text-sm font-light text-xs">
                Works with :
              </p>
              {/* 3 BOXES */}
              <div className="my-2 h-0.5 w-full bg-gray-400"></div>
              <h2 className="text-black my-1 text-xl font-semibold">$428.99</h2>
              <h2 className="text-black my-1 text-base font-normal">
                28% discount
              </h2>
              <h2 className="text-black my-1 text-base font-thin">
                Warranty 12 Months
              </h2>
              <div className="my-2 h-0.5 w-full bg-gray-400"></div>
              <h2 className="text-black my-1 text-base font-thin">
                Condition Fair
              </h2>
              <h2 className="text-black my-1 text-base font-thin">
                7 oz of e-waste saved
              </h2>

              <button className="inline-block mt-6 bg-violet rounded-sm w-full md:w-4/5 py-3 hover:bg-violet-700 text-white">
                See more
              </button>
            </div>
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
      {/* <div className="my-6 grid md:grid-cols-3 sm:grid-cols-1 gap-6">
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
      </div> */}

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
                {flips.map((l, i) => (
                  <li key={i}>
                    <Link href="#!">
                      <a className="text-gray-600 text-sm font-light">
                        {l.category}
                      </a>
                    </Link>
                    {/*Child */}
                    <ul className="list-inside ml-3">
                      {l.main.map((m, i) => (
                        <li key={i}>
                          <Link href="#!">
                            <a className="text-gray-600 text-xs font-light">
                              {m.phone}
                            </a>
                          </Link>
                          {/*Nested child */}
                          <ul className="list-inside ml-3">
                            {m.links.map((n, i) => (
                              <li key={i}>
                                <Link href="#!">
                                  <a className="text-gray-600 text-2xs font-light">
                                    {n}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <h1 className="my-2 text-black font-medium text-lg">
                95 PRODUCTS
              </h1>
            </div>
            {/* PRICE */}
            <div></div>
            {/* CONDITION */}
            <div className="py-4">
              <h2 className="text-black font-medium">Conditions</h2>
              {conditions.map((c, i) => (
                <ListCBox key={i} value={c} changer="1" numIndex={i} />
              ))}
            </div>
            {/* I want a phone for... */}
            <div className="py-4">
              <h2 className="text-black font-medium">I want a phone for...</h2>
              {iwantphone.map((k, i) => (
                <ListCBox key={i} changer="2" value={k} numIndex={i} />
              ))}
            </div>
            {/* ... And that is */}
            <div className="py-4">
              <h2 className="text-black font-medium">Color</h2>
              {colorOfPhone.map((l, i) => (
                <ListCBox key={i} value={l} changer="3" numIndex={i} />
              ))}
            </div>
            {/* Delivery */}
            <div className="py-4">
              <h2 className="text-black font-medium">Delievery</h2>
              {delievery.map((m, i) => (
                <ListCBox key={i} value={m} changer="4" numIndex={i} />
              ))}
            </div>
            {/* ... Warranty */}
            <div className="py-4">
              <h2 className="text-black font-medium">Warranty</h2>
              {warranty.map((c, i) => (
                <ListCBox
                  key={i}
                  value={c}
                  changer="5"
                  year="Year"
                  numIndex={i}
                />
              ))}
            </div>
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
