import React from 'react'
import Link from '../Link'

const ProductMInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
      <div className="mb-10 md:mb-0">
        <h1 className="text-black text-4xl text font-bold">
          Welcome to Back Market, the refurbished (super) market.
        </h1>
        <Link href="!#">
          <a className="inline-block mb-5 pt-2">
            SEE REVIEWS FROM 41241 CUSTOMERS
          </a>
        </Link>
        <button className="text-white text-sm rounded-md bg-black px-6 py-4 block">
          Learn about our quality standards
        </button>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((num, i) => (
            <div
              key={i}
              className="border-2 p-4 border-gray-200 text-center rounded-md"
            >
              <h3 className="text-black font-semibold">Best offer available</h3>
              <h3 className="text-gray-400">
                Selected by our price-quality algorithm.
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductMInfo
