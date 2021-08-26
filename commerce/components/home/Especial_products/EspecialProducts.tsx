import React,{ReactNode} from 'react'
import EspeciallyForU from '@components/ui/ProductCat/Especially/EspeciallyForU'
import Image from 'next/image'
import laptop from "../../../public/assets/img/laptop1.png"
 interface Props{
    numi?: number | any;
  key?: number;
}
const EspecialProducts = (props:Props,{children}:{children:ReactNode}) => {
    return (
      <div className={`${props.key === 4 && 'md:col-span-2 md:block hidden'}`}>
        {children}
        <EspeciallyForU>
          <h3 className="text-black font-medium">Flash Sale</h3>
          <div className="w-20 h-40 mx-auto">
            <Image src={laptop} />
          </div>
          <div>
            <h2>Iphone</h2>
            <p className="text-gray-400 text-sm">Condition Excellent</p>
            <h2 className="text-gray-400">Ends in</h2>
            <h3>$339.99</h3>
          </div>
        </EspeciallyForU>
      </div>
    )
}

export default EspecialProducts
