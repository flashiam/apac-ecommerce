import React, { ReactNode } from 'react'
import EspCardDesign from '@components/ui/Especialcard/EspCardDesign'
import Link from 'next/link'
import Image from 'next/image'
import laptop from '../../../../public/assets/img/laptop1.png'

interface Especial {
  e_name: string
  e_price: string
  e_sale_end: string
  img: StaticImageData
}
type Props = {
  esp: Especial
  value: number
}

const EspecialProducts = (props: Props) => {
  const { e_price, e_sale_end, e_name, img } = props.esp

  if (props.value === 4) {
    return (
      <div className="md:col-span-2 bg-xxmain col-span-2 block p-4 rounded-md md:block">
        <EspCardDesign>
          <h3 className="text-black text-center font-medium text-xl">
            Best Deals For Our Valuable Customers
          </h3>
          <div className="text-gray-600 font-thin text-xs">
            <h3 className="text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              autem ipsam similique possimus ratione ipsa accusantium error in
              placeat officia commodi numquam non, voluptates magnam sequi
              voluptatem dolorem praesentium? Deleniti.
            </h3>
            <h5 className="text-black font-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              quibusdam porro quasi consectetur dignissimos perferendis!
            </h5>
            <p>Lorem ipsum dolor sit amet.</p>
            <button
              className="mt-3 mx-auto block border-2 border-black rounded-sm w-1/2 md:w-1/4 py-1 transition-colors duration-200 ease-in hover:bg-black font-medium
          hover:text-white text-base text-black"
            >
              Click here for more
            </button>
          </div>
        </EspCardDesign>
      </div>
    )
  }

  return (
    <Link href="items/111">
      <a className="block hover:bg-white bg-xxmain p-4 duration-150 transition-shadow hover:shadow-xl rounded-md">
        <EspCardDesign>
          <h3 className="text-black font-medium">Flash Sale</h3>
          <div className="w-20 h-27 mx-auto">
            <Image src={img} />
          </div>
          <div>
            <h2>{e_name}</h2>
            <p className="text-gray-400 text-sm">Condition Excellent</p>
            <h2 className="text-gray-400">{e_sale_end}</h2>
            <h3>{e_price}</h3>
          </div>
        </EspCardDesign>
      </a>
    </Link>
  )
}

export default EspecialProducts
