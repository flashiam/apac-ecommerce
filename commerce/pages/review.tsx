import React from 'react'
import { Layout } from '../components/common'
import { reviews } from '../data1'
import Review from '../components/common/Productpage/Review/Review'
import Head from '../components/common/Head/Head'
const Reviews = () => {
  return (
    <div className="md:px-14 px-5 py-5 sm:px-7 dark:bg-gray-900 bg-gray-200">
      {/*Customers reviews  */}
      <Head title="Reviews And Rating"></Head>

      <div>
        <span className="my-1 text-4xl font-bold inline-block">
          Reviews And Ratings
          <span className="ml-2">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <span key={i} className="text-4xl material-icons text-yellow-500">
                {i > 3 ? 'star_border' : 'star'}
              </span>
            ))}
          </span>
        </span>
      </div>
      <div className="mt-7">
        <h3 className="mb-5 text-black font-medium text-xl">
          Customer Reviews
        </h3>
        {/* Customer pic and Name */}
        <div>
          {reviews.map((r, i) => (
            <Review key={i} review={r} bg="white" />
          ))}
        </div>
        <button className="hover:text-gray-900 duration-200 text-gray-700 font-semibold text-lg inline-block">
          {' '}
          More Reviews
        </button>
      </div>
    </div>
  )
}

export default Reviews
Reviews.Layout = Layout
