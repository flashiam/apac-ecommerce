import React from 'react'
type Props={pname:string}
import {MProduct}  from "../../../../data1"
const ProductHeadDetails = ({pname}:Props) => {
    return (
        <>
              <div className="mb-4">
        <h1 className="text-black font-medium text-2xl">
          Refurbished {pname}
        </h1>
        <p className="my-4 text-gray font-light text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          magnam!
        </p>
        <div className="px-8 py-4 bg-white border-2 border-gray">
          <h2 className="text-medium">I need a {pname} that works with ...</h2>
        </div>
      </div>
        </>
    )
}

export default ProductHeadDetails
