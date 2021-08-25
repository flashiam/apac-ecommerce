import React from 'react'
import Link from '../Link'

const ProductMInfo = () => {
  return (
    <>
          <div className="col-span-3">
              <h1 className="text-black text-4xl text font-bold">Welcome to Back Market,
                  the refurbished (super) market.</h1>
              <Link href="!#"><a className="inline-block mb-5">SEE REVIEWS FROM 41241 CUSTOMERS</a></Link>
              <button className="text-white rounded-md bg-black px-6 py-4 ">Learn about our quality standards</button>
      </div>

          <div className="col-span-4">
              <div className="grid grid-cols-2 gap-4">
              {[1, 2,3,4].map((num, i) => (
                <div key={i} className="border-2 border-gray-200 text-center">
                    <h3 className="text-black font-semibold">Best offer available</h3>
                    <h3 className="text-gray-400">Selected by our price-quality algorithm.</h3>
                </div>

            ))}
              </div>

            
          </div>
      

     

      
    </>
  )
}

export default ProductMInfo
