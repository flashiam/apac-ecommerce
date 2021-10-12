import React, { useState, useRef, SyntheticEvent, useEffect } from 'react'
import router from 'next/router'
// import {images} from "../../../../next.config"
import TopLayer from '../SingleProduct/TopLayer'
import Image from 'next/image'
import RSideDetails from '../SingleProduct/RSideDetails'
import type { CartProduct, MProduct } from '../../../../data1'
import testImg from '../../../../public/assets/img/iphone.png'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../../../actions/productAction'

type mainProduct = {
  main: MProduct
  rev: StaticImageData[]
}
// type ProductDetails = {
//   name: string
//   works_with: string
//   price: string
//   dis: string
//   warranty: string
//   cond: string

//     details: string,
//     img: StaticImageData,
//     support_sims?:string|null

// }

const MainProduct = (props: mainProduct) => {
  const {
    id,
    name,
    works_with,
    inStock,
    quantity,
    color,
    ram,
    storage,
    modelno,
    price,
    dis,
    warranty,
    cond,
    details,
    img,
    support_sims,
    // cartItem,
  } = props.main

  const imgResultRef = useRef<SyntheticEvent>(null)
  // State for added item
  const [addedItem, setAddedItem] = useState<CartProduct>()
  // State for current showcase img
  const [currentImg, setCurrentImg] = useState<StaticImageData>(img)
  // Destructing required properties

  // Creating cart item
  const cartItem: CartProduct = {
    id,
    img,
    name,
    price,
    inStock,
    quantity,
    color,
    ram,
    storage,
    modelno,
  }
  // Hooks to use redux
  const dispatch = useDispatch()

  // Function to set the current img on hover
  const changeImgOnHover = (img: StaticImageData) => {
    setCurrentImg(img)
  }

  // Function for auto zoom feature
  const autoZoomImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    // console.log(e.currentTarget.offsetWidth, e.currentTarget.offsetHeight)
    // console.log()
  }

  // Function to add item to cart
  const addItem = (item: CartProduct) => {
    dispatch(addCartItem(item))
    // Redirect to cart page
    router.push('/cart')
  }

  useEffect(() => {
    setCurrentImg(img)
  }, [])

  return (
    <>
      {/* <TopLayer/> */}

      <div className=" md:flex md:justify-between sm:block">
        <h2 className="md:hidden block text-black-400 text-lg bg-white font-medium mb-3">
          Our very best Refurbished {name}:
        </h2>
        <h1 className="md:hidden sm:block sm:text-3xl sm:text-black font-medium">
          {name} {support_sims}
        </h1>
        <p className="sm:block sm:my-2 md:hidden text-gray-600 font-light text-xs">
          Works with :{works_with}
        </p>
        {/* <div className="md:h-20 md:w-20 md:text-white md:bg-green md:rounded-full md:flex md:items-center md:text-2xl md:justify-center sm:hidden hidden">{dis}
            </div> */}
      </div>

      {/* TopLayerEnd */}
      <div>
        <div className="w-full relative flex-col md:flex sm:flex-row md:items-start md:flex-row md:justify-between h-full">
          {/* Container for sticky showcase */}
          <div className=" md:sticky md:left-0 md:top-20 border-2  border-gray-200 rounded-md md:w-1/2 h-full md:p-3">
            <div className=" md:flex md:flex-row md:gap-4 block">
              {/* IMG */}
              <div className="md:relative">
                <div className="md:sticky md:top-25 md:block hidden md:w-1/12">
                  {props.rev.map((p: any, i: any) => (
                    <div
                      key={i}
                      className="w-12 h-12 border-2 border-gray-200 mb-3 p-2 rounded-md cursor-pointer"
                      onMouseOver={() => changeImgOnHover(p)}
                    >
                      <Image src={p} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Main Product image */}
              <div className="md:w-11/12 md:sticky">
                <div className=" mb-3 block w-full md:sticky">
                  <Image
                    objectFit="contain"
                    // sizes={image.sizes}
                    height="40%"
                    width="65%"
                    src={currentImg}
                    layout="responsive"
                    // onLoad={(e) => autoZoomImg(e)}
                  />
                </div>

                {/* Desktop View Buttons */}
                <div className="hidden md:flex c1:block sm:block lg:flex-row md:flex-col lg:gap-4 md:sticky">
                  <button
                    onClick={() => addItem(cartItem)}
                    className=" duration-200 c1:block focus:sm:block  mt-2 hover:bg-gray-800 rounded-sm sm:w-full py-2 bg-black w-full text-white"
                  >
                    Add to Cart
                  </button>
                  <button className=" sm:block c1:block  mt-2 bg-gray-100 hover:bg-white duration-200 rounded-sm sm:w-full py-2 border-2 border-black w-full text-black">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View buttons */}
          <div className="md:hidden sm:hidden block w-full">
            <button
              onClick={() => addItem(cartItem)}
              className=" duration-200  block mt-2 hover:bg-gray-800 rounded-sm sm:w-full py-2 bg-black w-full text-white"
            >
              Add to Cart
            </button>
            <button className=" block mt-2 bg-gray-100 hover:bg-white duration-200 rounded-sm sm:w-full py-2 border-2 border-black w-full text-black">
              Buy Now
            </button>
          </div>
          {/* Description */}
          <RSideDetails main={props.main} />
        </div>
      </div>
    </>
  )
}
export default MainProduct
