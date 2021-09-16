import React, { useEffect, useState, FC } from 'react'
import Image from 'next/image'
import { Head } from '@components/common'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

interface Testimonial {
  id: number | string
  profilePic: StaticImageData
  name: string
  review: string
}

interface Props {
  testimonials: Testimonial[]
}

const Testimonials: FC<Props> = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [pause, setPause] = useState<boolean>(false)
  let timer: any

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    duration: 1000,
    initial: 0,
    slideChanged: (s) => setCurrentSlide(s.details().relativeSlide),
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    timer = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, [pause, slider])

  return (
    <>
      <div className="mb-6 overflow-hidden md:max-h-48 md:h-48 max-h-72 h-72 pb-5">
        <Head />
        <h1 className="text-xl font-semibold pb-8">What customers say -</h1>

        <div ref={sliderRef} className="keen_slider flex h-full w-full">
          {testimonials?.map((test) => (
            <div
              key={test.id}
              className="keen-slider__slide flex flex-col space-x-5 items-center justify-center md:flex-row md:items-center md:justify-center h-full w-full"
            >
              <div>
                <Image
                  src={test.profilePic}
                  height="100%"
                  width="100%"
                  className="object-cover rounded-full"
                />
              </div>
              <div className="relative mt-2 md:mt-0 lg:w-3/4">
                <p className="relative md:text-lg px-6 mb-5">
                  <i className="blockquote fa fa-quote-left pr-3 -top-3 left-0"></i>
                  {test.review}
                  <i className="blockquote fa fa-quote-right pl-3 -bottom-3"></i>
                </p>

                <p className="absolute right-0 italic font-semibold">
                  - {test.name}
                </p>
              </div>
            </div>
          ))}
          {slider && (
            <div className="w-full space-x-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    slider.moveToSlideRelative(i)
                  }}
                  className={
                    'h-5 w-5 rounded-full bg-gray-400' +
                    (currentSlide === i ? ' bg-red' : '')
                  }
                />
              ))}
            </div>
          )}
          {/* 
        {slider && (
        <div className="w-full">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              slider.moveToSlideRelative(i)
            }}
            className={
              'h-10 w-10 rounded-full bg-red'+
              (currentSlide === i ? ' bg-red' : '')
            }
          />
        ))}
        </div>
        )}  */}
        </div>
      </div>

      {slider && (
        <div className="w-full space-x-3 flex justify-center pb-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                slider.moveToSlideRelative(i)
              }}
              className={
                'h-2 w-2 rounded-full transform transition bg-gray-400' +
                (currentSlide === i ? ' scale-120' : '')
              }
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Testimonials
