import React, { FC } from 'react'
import Image from 'next/image'
import testAvatar from '../../public/assets/test_avatar.jpg'

const Testimonials: FC = () => {
  return (
    <>
      <h1 className="text-xl font-semibold pb-8">What customers say -</h1>
      <div className="flex flex-col space-x-5 items-center justify-center md:flex-row md:items-start md:justify-center">
        <div>
          <Image
            src={testAvatar}
            height="100%"
            width="100%"
            className="object-cover rounded-full"
          />
        </div>
        <div className="mt-2 md:mt-0">
          <p className="relative lg:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            facere nesciunt excepturi dolorum accusantium hic quasi explicabo
            debitis nihil a recusandae, beatae suscipit iste! Blanditiis?
            <span className="absolute text-4xl text-gray-400 font-black left-0 -top-5 md:-top-4 md:left-7">
              "
            </span>
            <span className="absolute text-4xl text-gray-400 font-black right-0 -top-5 md:-top-4 md:right-7">
              "
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Testimonials
