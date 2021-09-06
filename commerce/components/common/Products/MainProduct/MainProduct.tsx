import React from 'react'
import TopLayer from '../SingleProduct/TopLayer';
import Image from 'next/image';
import RSideDetails from '../SingleProduct/RSideDetails';


type mainProduct = {
    main: ProductDetails
  }
  type ProductDetails = {
    name: string
    works_with: string
    price: string
    dis: string
    warranty: string
    cond: string
      details: string,
      img: StaticImageData,
      support_sims:string
    
  }

const MainProduct = (props: mainProduct) => {
    const { name, works_with, price, dis, warranty, cond, details,img,support_sims } = props.main
    return (
        <>
            {/* <TopLayer/> */}
            <div className="md:flex md:justify-between md:items-center sm:block mb-2">
            <h2 className="md:self-start text-black-400 text-lg bg-white font-medium">
              Our very best Refurbished iPhone 11:
            </h2>
                <h1 className="md:hidden sm:block sm:text-3xl sm:text-black font-medium">{name} {' '}{support_sims}</h1>
            <p className="sm:block sm:my-2 md:hidden text-gray-600 font-light text-xs">
          Works with :{works_with}
        </p>
            <div className="md:h-20 md:w-20 md:text-white md:bg-green md:rounded-full md:flex md:items-center md:text-2xl md:justify-center sm:hidden hidden">{dis}
            </div>
            </div>
            {/* TopLayerEnd */}
          <div className="w-full block md:flex md:flex-row md:items-center md:justify-between">
            {/* IMG */}
            <div className="mx-auto sm:block sm:mx-auto block md:w-1/2 mb-3">
              <Image
                objectFit="scale-down"
                height={250}
                width={300}
                src={img}
              />
            </div>

            <RSideDetails main={props.main} />

            <button className="md:hidden sm:block block mt-4 bg-violet rounded-sm w-full py-1 hover:bg-black-600 text-white">
              See more
            </button>
          </div> 
        </>
    )
}
export default MainProduct;