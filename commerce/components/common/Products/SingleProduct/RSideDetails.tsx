import { Button } from '@components/ui'
import React from 'react'

const RSideDetails = () => {
  return (<>
     <div className="md:w-1/2 w-full flex-1 block md:border-0 sm:border-2 border-gray-400 rounded-sm p-4 md:bg-white bg-gray-100" >
        <h1 className="md:text-2xl md:text-black font-medium md:block sm:hidden">iPhone 11 64GB - Black</h1>
        <p className="sm:hidden md:my-2 md:block text-gray-600 font-light text-xs">
          Works with :
        </p>
        {/* 3 BOXES */}
        <div className="my-2 md:block h-0.5 w-full bg-gray-400 sm:hidden"></div>
        <h2 className="sm:mb-1 text-black md:my-1 text-xl font-medium">$428.99</h2>
        <h5 className="text-black my-1 text-base font-normal">
          28% discount
        </h5>
        <h5 className="text-black my-1 text-sm font-thin">
          Warranty 12 Months
        </h5>
        <div className="my-2 md:block h-0.5 w-full bg-gray-400 sm:hidden"></div>
        <h5 className="text-black my-1 text-sm font-thin">
          Condition Fair
        </h5>
        <h5 className="text-black mt-1 text-sm font-thin">
          7 oz of e-waste saved
        </h5>

        <button className="mt-6 bg-primary md:inline-block rounded-sm w-full md:w-4/5 py-3 hover:bg-primary-hover hidden md:text-white">
                See more
              </button>
      {/* <Button/> */}
    </div>
 
      </>
       
    )
}

export default RSideDetails
