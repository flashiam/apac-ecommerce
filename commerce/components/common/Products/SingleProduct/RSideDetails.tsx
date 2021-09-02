import React from 'react'

const RSideDetails = () => {
  return (<>
     <div className="md:border-0 sm:border-2 sm:border-gray sm:rounded-sm sm:p-4 md:bg-white">
        <h1 className="md:text-2xl md:text-black md:block sm:hidden">iPhone 11 64GB - Black</h1>
        <p className="sm:hidden md:my-2 md:block text-gray-600 font-light text-xs">
          Works with :
        </p>
        {/* 3 BOXES */}
        <div className="h-0.5 w-full bg-gray-400 sm:hidden"></div>
        <h2 className="sm:mb-1 text-black md:my-1 text-xl font-semibold">$428.99</h2>
        <h5 className="text-black my-1 text-base font-normal">
          28% discount
        </h5>
        <h5 className="text-black my-1 text-sm font-thin">
          Warranty 12 Months
        </h5>
        <div className="my-2 h-0.5 w-full bg-gray-400 sm:hidden"></div>
        <h5 className="text-black my-1 text-sm font-thin">
          Condition Fair
        </h5>
        <h5 className="text-black mt-1 text-sm font-thin">
          7 oz of e-waste saved
        </h5>

     
    </div>
 
      </>
       
    )
}

export default RSideDetails
