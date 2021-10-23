import React from 'react'
import Image from 'next/image'
import laptop from '../../../../public/assets/img/laptop2.png'
import { MProduct, Product } from '../../../../data1'
import SCardDesign from '@components/common/CardDesign/SCardDesign'

// const fp = {
//   name: 'MacBook',
//   details:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elitExplicabo, vel. Voluptate, quisquam.',
// }

interface FProducts {
  name: string
  details: string
  img: StaticImageData
}

type Props = {
  products: Product
  numIndex: number
}
const FirstProducts = (props: Props) => {
  const { product_id, name, description, image } = props.products
  return (
    <div
      className={`${
        props.numIndex <= 2
          ? 'md:col-span-4 sm:col-span-4 lg:col-span-4 '
          : 'sm:col-span-4 md:col-span-4 lg:col-span-3'
      }`}
    >
      <SCardDesign productId={product_id.toString()}>
        <div className="h-32 w-20 mx-auto">
          <Image
            src={image || laptop}
            height={130}
            width={100}
            objectFit="scale-down"
          />
        </div>
        <div>
          <h3 className="text-black text-sm font-semibold">{name}</h3>
          <p className="text-black text-xs">{description}</p>
        </div>
      </SCardDesign>
    </div>
  )
}

export default FirstProducts
