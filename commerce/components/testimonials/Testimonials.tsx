import React, { useEffect, useState, FC } from 'react'
import Image from 'next/image'
import testAvatar from '../../public/assets/test_avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Head } from '@components/common'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import p1 from '../../public/assets/profile/p1.jpg'
import p2 from '../../public/assets/profile/p2.jpg'
import p3 from '../../public/assets/profile/p3.jpg'
import p4 from '../../public/assets/profile/p4.jpg'

const Testimonials: FC = () => {
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

  const testimonials = [
    {
      id: 1,
      profilePic: p1,
      name: 'John Doe',
      review:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,facere nesciunt excepturi dolorum accusantium hic quasi explicabo debitis nihil a recusandae, beatae suscipit iste! Blanditiis?',
    },
    {
      id: 2,
      profilePic: p2,
      name: 'Jane Doe',
      review:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,facere nesciunt excepturi dolorum accusantium hic quasi explicabo debitis nihil a recusandae, beatae suscipit iste! Blanditiis?',
    },
    {
      id: 3,
      profilePic: p3,
      name: 'Brad Doe',
      review:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,facere nesciunt excepturi dolorum accusantium hic quasi explicabo debitis nihil a recusandae, beatae suscipit iste! Blanditiis?',
    },
  ]

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
    <div className="mb-6 overflow-hidden">
      <Head />
      <h1 className="text-xl font-semibold pb-8">What customers say -</h1>
      <div ref={sliderRef} className="keen_slider flex">
        {testimonials?.map((test) => (
          <div
            key={test.id}
            className="keen-slider__slide flex flex-col space-x-5 items-center justify-center md:flex-row md:items-center md:justify-center max-h-60 h-60"
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
      </div>
    </div>
  )
}

export default Testimonials
