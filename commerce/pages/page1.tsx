import React from 'react'
import { Layout } from '@components/common'
import Link from 'next/link'
import Head from 'next/head'
import SimpleCard from '@components/common/LooperCard/SimpleCard/SimpleCard'
import Image from 'next/image'
import laptop from '../public/assets/img/mobile1.png'
const links = [
  'Installment',
  '30-day money-back guarantee',
  '1-year-warranty',
  'Free standard shipping',
]

const iphonesLinks = ['iphone10', 'iphone11', 'iphone11 pro', 'iphone11 max']
const conditions = ['All', 'Excellenet', 'Good', 'Fair']
const iwantphone = ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J']
const page1 = () => {
  return (
    <div className="p-10 bg-gray-100">
      <Head>
        <title>Products</title>
      </Head>

      {/* Links */}
      <div className="bg-white my-4 p-4 flex justify-around rounded-md md:shadow-sm align-center">
        {links.map((l, i) => (
          <Link key={i} href="!#">
            <a className="text-black text-sm font-light">{l}</a>
          </Link>
        ))}
      </div>
      {/* REFURBHISHED IPHONE 11 */}
      <div className="mb-4">
        <h1 className="text-black font-medium text-2xl">
          Refurbished iPhone 11
        </h1>
        <p className="my-4 text-gray-600 text-sm font-light text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          magnam!
        </p>
        <div className="px-8 py-4 bg-white border-1/2 border-grey-100">
          <h2 className="text-medium">I need a phone that works with ...</h2>
        </div>
      </div>
      {/* MAIN PRODUCT */}
      <div className="my-6 grid grid-cols-3 gap-6">
        <div className="p-8 col-span-2 bg-white rounded-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-black font-medium">
              Our very best Refurbished iPhone 11:
            </h2>

            <div className="h-20 w-20 text-white bg-green rounded-full flex items-center text-2xl justify-center">
              -28%
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="mx-auto w-20 h-33">
              <Image objectFit="scale-down" src={laptop} />
            </div>
            <div>
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

              <button className="inline-block mt-6 bg-violet rounded-sm w-4/5 py-3 hover:bg-violet-700 text-white">
                See more
              </button>
            </div>
          </div>
        </div>
        {/* left container */}
        <div className="p-6 rounded-md bg-white">
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
        <div className="grid grid-cols-4">
          {/* Single columns */}
          <div className="md:col-span-1 md:bg-transparent bg-violet pt-2">
            {/*SPAN-1 LEFT SIDE LINKS */}
            <div>
              <h2 className="text-black font-medium">Categories</h2>
              <ul>
                <li>
                  <Link href="#!">
                    <a className="text-gray-500 text-sm font-light">
                      Tech Product
                    </a>
                  </Link>
                  <ul className="list-none">
                    <li>
                      <Link href="#!">
                        <a className="text-gray-500 text-sm font-light">
                          iphone
                        </a>
                      </Link>
                      <ul className="list-none">
                        {iphonesLinks.map((l, i) => (
                          <li key={i}>
                            <Link href="#!">
                              <a className="text-gray-500 text-sm font-light">
                                {l}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </li>
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
                <div className="flex items-center" key={i}>
                  <input
                    type="checkbox"
                    className="mr-2 inline-block appearance-noneI want a phone for... checked:bg-blue-600 checked:border-transparent h-5 w-5 border-none rounded-md"
                    id={`check1-${i}`}
                  />
                  <label
                    htmlFor={`check1-${i}`}
                    className="text-base text-tbii"
                  >
                    {c}
                  </label>
                </div>
              ))}
            </div>
            {/* I want a phone for... */}
            <div className="py-4">
              <h2 className="text-black font-medium">I want a phone for...</h2>
              {iwantphone.map((c, i) => (
                <div className="flex items-center justify-start" key={i}>
                  <input
                    id={`check2-${i}`}
                    type="checkbox"
                    className="appearance-noneI want a phone for...
                                         checked:border-violet h-5 w-5 border-none rounded-md mr-2 inline-block"
                  />
                  <label
                    htmlFor={`check2-${i}`}
                    className="text-base text-cbcolor"
                  >
                    {c}
                  </label>
                </div>
              ))}

            </div>
            {/* ... And that is */}
            <div className="py-4">
              <h2 className="text-black font-medium">... And that is</h2>
              <div>
              <label className="inline-flex items-center"
              >
                 <input
                   
                    type="checkbox"
                    className="form-checkbox w-6 h-6 border-0 text-green-500"
                  />
                  <span className="ml-2">Option-1</span>
              </label>

              </div>
              <div>
              <label className="inline-flex items-center"
              >
                 <input
                   
                    type="checkbox"
                    className="form-checkbox w-6 h-6 border-0 text-pink"
                  />
                  <span className="ml-2">Option-1</span>
              </label>

              </div>
            </div>
          </div>
          {/* Triple columns */}
          <div className="md:col-span-3">
            <div className="p-4 rounded-md md:grid-cols-3  md:bg-transparent gap-4 grid bg-pink">
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
<p className="bg-indigoc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione ex nam dolore eaque suscipit pariatur quibusdam laboriosam recusandae itaque!</p>
<p className="bg-indigod">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione ex nam dolore eaque suscipit pariatur quibusdam laboriosam recusandae itaque!</p>

    </div>
  )
}

export default page1
page1.Layout = Layout
