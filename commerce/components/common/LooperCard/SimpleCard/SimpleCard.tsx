import React from 'react'
import Image from 'next/image'
import laptop1 from '../../../../public/assets/img/mobile1.png'
import SCardDesign from '@components/common/CardDesign/SCardDesign'
import { MProduct } from '../../../../data1'

type Props = {
  product: MProduct
  index?: string | number
}

type Product = {
  flash_sale?: string
  img?: StaticImageData
  warranty?: string
  price?: string
  name?: string
}

const SimpleCard = (props: Props) => {
  const { id, img, warranty, price, name, flashSale } = props.product
  return (
    <SCardDesign productId={id}>
      <h5 className="text-black font-bold">{flashSale}</h5>
      <div className="w-20 h-40 mx-auto">
        <Image src={img ? img : laptop1} />
      </div>
      <h3 className="text-black-700 font-medium">{name}</h3>
      <h4 className="text-gray-500 font-thin">{warranty}</h4>
      <h4 className="font-normal text-black">${price}</h4>
    </SCardDesign>
  )
}

export default SimpleCard
