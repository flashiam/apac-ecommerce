import React from 'react'
import Image from 'next/image'
import laptop from '../../../../public/assets/img/laptop2.png'

import SCardDesign from '@components/common/CardDesign/SCardDesign'

// const fp = {
//   name: 'MacBook',
//   details:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elitExplicabo, vel. Voluptate, quisquam.',
// }

interface FProducts {
  name: string
  details: string
  img:StaticImageData
}

type Props = {
  products: FProducts
  numIndex: number
}
const FirstProducts = (props: Props) => {
  const { name, details,img } = props.products
  return (
    <div
      className={`${props.numIndex <= 1 ? 'md:col-span-3' : 'md:col-span-2'}`}
    >
      <SCardDesign>
        <div className="h-32 w-20 mx-auto">
          <Image src={img} />
        </div>
        <div>
          <h3 className="text-black text-sm font-semibold">{name}</h3>
          <p className="text-black text-xs">{details}</p>
        </div>
      </SCardDesign>
    </div>
  )
}

export default FirstProducts
