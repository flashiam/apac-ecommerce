import React from 'react'
import { useKeenSlider } from 'keen-slider/react'

type Props = {
  children: any
}

const ProductCarousel = ({ children }: Props) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 3,
    spacing: 5,
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  )
}

export default ProductCarousel
