import React, {useEffect,useRef,useState} from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Link from "next/link"
import Image from "next/image"



type Carousel = {

    img: StaticImageData;
    link:string
}

type Props = {
    carousels: Carousel[]
  }
const ArrDotCarousel= ({carousels}:Props) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [pause, setPause] = useState<boolean>(false)
    const timer = useRef<number>(0)

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,

    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })
  useEffect(() => {
    sliderRef?.current?.addEventListener('mouseover', () => setPause(true))
    sliderRef?.current?.addEventListener('mouseout', () => setPause(false))
  }, [sliderRef])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)

    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
        {carousels.map((carousel, i) => (
        <div key={i} className="keen-slider__slide offer-slide">
          <Link href={carousel.link}>
            <Image src={carousel.img} />
          </Link>
        </div>
      ))}
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e: { stopPropagation: () => any }) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e: { stopPropagation: () => any }) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </div>
      )}
    </>
  )
}
type ArrowProps = any

function ArrowLeft(props:ArrowProps) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
      <svg
          style={{width:50,height:50,position:"relative",left:2}}
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props:ArrowProps) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
    style={{width:50,height:50 }}

      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}

export default ArrDotCarousel