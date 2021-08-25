import React, { useState, useRef, useEffect } from 'react'
import style from './Carousel.module.css'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'
import Image from 'next/image'

interface Carousel {
  img: StaticImageData
  link: string
}

type Props = {
  carousels: Carousel[]
}

const Carousel = ({ carousels }: Props) => {
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
    sliderRef?.current?.addEventListener('mouseover', () => setPause(true))
    sliderRef?.current?.addEventListener('mouseout', () => setPause(false))
  }, [sliderRef])

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
    <div ref={sliderRef} className="keen-slider">
      {carousels.map((carousel, i) => (
        <div key={i} className="keen-slider__slide offer-slide">
          <Link href={carousel.link}>
            <Image src={carousel.img} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Carousel
