import React from 'react'
import Image from 'next/image'
import laptop1 from '../../../../public/assets/img/mobile1.png'
import SCardDesign from '@components/common/CardDesign/SCardDesign'

type Props = {
  product: Product
  index?:string|number

}

type Product = {
  flash_sale?: string
  img?: StaticImageData
  warranty?: string
  price?: string
  name?: string
}

const SimpleCard = (props: Props) => {
  const { flash_sale, img, warranty, price, name,} = props.product
  return (
    <SCardDesign index={props.index}>
      <h5 className="text-black font-bold">{flash_sale}</h5>
      <div className="w-20 h-40 mx-auto">
        <Image src={img?img:laptop1} />
      </div>
      <h3 className="text-black-700 font-medium">{name}</h3>
      <h4 className="text-gray-500 font-thin">{warranty}</h4>
      <h4 className="font-normal text-black">{price}</h4>
    </SCardDesign>
  )
}

export default SimpleCard
