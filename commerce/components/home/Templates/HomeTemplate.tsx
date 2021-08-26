import React from 'react'
import Link from 'next/link'
const HomeTemplate = () => {
    return (
        <>
            <div className="my-6 text-center">
            <blockquote className="font-serif my-6 text-3xl font-bold">
              "Forever young, I wanna be forever youuuuuuuuung, etc."
            </blockquote>
            <Link href="!#">
              <a className="underline text-black-700 my-8 inline-block ">
                Alphaville
              </a>
            </Link>
            <p className="text-gray-700">
              Back Market is a marketplace that fights against planned
              obsolescence.
            </p>
            <Link href="!#">
              <a className="underline text-black-700">Learn more</a>
            </Link>
          </div> 
        </>
    )
}

export default HomeTemplate
