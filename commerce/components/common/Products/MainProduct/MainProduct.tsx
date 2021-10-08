import React from 'react'
// import {images} from "../../../../next.config"
import TopLayer from '../SingleProduct/TopLayer';
import Image from 'next/image';
import RSideDetails from '../SingleProduct/RSideDetails';
import type {MProduct}  from "../../../../data1"

type mainProduct = {
  main: MProduct
  rev:StaticImageData[]
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
    const { name, works_with, price, dis, warranty, cond, details,img,support_sims } = props.main
    return (
        <>
            {/* <TopLayer/> */}
            <div className="md:flex md:justify-between sm:block">
            <h2 className="md:self-start text-black-400 text-lg bg-white font-medium mb-3">
              Our very best Refurbished {name}:
            </h2>
                <h1 className="md:hidden sm:block sm:text-3xl sm:text-black font-medium">{name} {' '}{support_sims}</h1>
            <p className="sm:block sm:my-2 md:hidden text-gray-600 font-light text-xs">
          Works with :{works_with}
        </p>
            {/* <div className="md:h-20 md:w-20 md:text-white md:bg-green md:rounded-full md:flex md:items-center md:text-2xl md:justify-center sm:hidden hidden">{dis}
            </div> */}
            </div>
            {/* TopLayerEnd */}
          <div className="w-full block md:flex md:flex-row sm:flex-col md:justify-between h-full">
            {/* IMG */}
          <div className="md:block hidden md:w-1/12" >
          {props.rev.map((p:any,i:any) => (
            <div key={i}
              className="w-12 h-12 border-2 border-accent-2 mb-3 cursor-pointer" >
              <Image src={p} className="w-full" />
            </div>
          ))}
            </div>
          <div className=" mx-auto sm:mx-auto  sm:w-25 mb-3 block md:w-5/12" >
            
              <Image
              objectFit="contain"
              // sizes={image.sizes}
               height={120}
              width={200}
                src={img}
                layout="responsive"
              />
            </div>

            <RSideDetails main={props.main} />

          <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-4">
          <button className="md:hidden sm:inline-block block mt-4 bg-violet rounded-sm sm:w-1/2 py-1 hover:bg-violet-400 w-full text-white">
            Add to Cart
            </button>
            <button className="md:hidden sm:inline-block block mt-4 bg-pink rounded-sm sm:w-1/2 py-1 hover:bg-pink w-full text-white">
              Buy Now
            </button>
     </div>
          </div> 
        </>
    )
}
export default MainProduct;