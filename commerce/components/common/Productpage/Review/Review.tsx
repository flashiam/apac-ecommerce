import Rate from '@components/common/Rateicons/Rate'
import React, { useState } from 'react'
import Image from 'next/image'

interface Props {
  review: {
    img: StaticImageData
    comment: string
    name: string
    title: string
    photos: StaticImageData[]
  }
  bg?: string
}
const Review = (props: Props) => {
  const [active, setActive] = useState(true)
  const { img, comment, name, title, photos } = props.review
  return (
    <>
      <div className={`p-4 rounded-md mb-6 shadow-sm bg-white`}>
        <div className="flex mb-8 items-center">
          <div className="rounded-full w-10 h-10 mr-4">
            <Image
              src={img}
              height="100%"
              width="100%"
              className="rounded-full w-full object-cover"
            />
          </div>
          <span>
            <h5 className="text-black text-lg font-bold">{name}</h5>
            <div className="w-25 h-5">
              <Rate h="4" w="4" m="2" />
            </div>
          </span>
        </div>
        {/* Comments And Main */}
        <div className="mb-7">
          <h3 className="font-semibold text-black text-sm">{title}</h3>
          {comment.length > 200 ? (
            <p
              className="text-gray-500 text-sm"
              style={{
                overflow: `${active && 'hidden'}`,
                textOverflow: `${active && 'ellipsis'}`,
                whiteSpace: `${active ? 'nowrap' : 'normal'}`,
              }}
            >
              {comment}
            </p>
          ) : (
            <p className="text-gray-500 text-sm">{comment}</p>
          )}
          <button
            className="my-1 
          text-gray-700 duration-200 hover:text-black border-b-2 hover:border-black border-transparent font-semibold"
            style={{ outline: 'none' }}
            onClick={() => setActive(!active)}
          >
            Read More
          </button>
        </div>
        {/*Images */}
        <div className="mt-6">
          {photos.map((p, i) => (
            <div
              key={i}
              className="w-12 inline-flex h-12 mr-2 p-2 border-2 border-accent-2"
              // style={{ border: '1px solid grey' }}
            >
              <Image src={p} className="w-full" />
            </div>
          ))}
        </div>
        <div
          className="w-full mt-2 bg-gray-300"
          style={{ height: '1px' }}
        ></div>
      </div>
    </>
  )
}

export default Review
