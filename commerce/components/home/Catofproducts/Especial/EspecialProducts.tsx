import React,{ReactNode} from 'react'
import EspCardDesign from '@components/ui/Especialcard/EspCardDesign'
import Link from "next/link"
import Image from 'next/image'
import laptop from "../../../../public/assets/img/laptop1.png"



type Props = {
  value: number;

}

const EspecialProducts = (props: Props) => {
    return (
      <Link href="!#">
     <a  className={`${props.value === 5 ? 'md:col-span-2 col-span-2':"block "}`}>
        <EspCardDesign >
          <h3 className="text-black font-medium">Flash Sale</h3>
          <div className="w-20 h-27 mx-auto">
            <Image src={laptop} />
          </div>
          <div>
            <h2>Iphone</h2>
            <p className="text-gray-400 text-sm">Condition Excellent</p>
            <h2 className="text-gray-400">Ends in</h2>
            <h3>$339.99</h3>
          </div>
         
        </EspCardDesign>
     </a>
      </Link>
    )
}

export default EspecialProducts
