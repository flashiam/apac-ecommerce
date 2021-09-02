import React from 'react'

const TopLayer = () => {
    return (
    
             <div className="md:flex md:justify-between md:items-center sm:block mb-2">
            <h2 className="md:self-start text-black-400 text-lg bg-white font-medium">
              Our very best Refurbished iPhone 11:
            </h2>
            <h1 className="md:hidden sm:block sm:text-3xl sm:text-black font-medium">iPhone 11 64GB - Black (GSM & CDMA)</h1>
            <p className="sm:block sm:my-2 md:hidden text-gray-600 font-light text-xs">
          Works with :
        </p>
            <div className="md:h-20 md:w-20 md:text-white md:bg-green md:rounded-full md:flex md:items-center md:text-2xl md:justify-center sm:hidden hidden">
              -28%
            </div>
          </div>
        
    )
}

export default TopLayer
