import React from 'react'
import Image from "next/image"
import laptop from "../../../../public/assets/img/laptop2.png"

import SCardDesign from '@components/common/CardDesign/SCardDesign'
interface NumIndex{
    numIndex: number 
  }

const FirstProducts = ({ numIndex }:NumIndex) => {
    return (
     
               <div
                
                className={`${numIndex <= 1 ? 'md:col-span-3' : 'md:col-span-2'}`}
              >
               <SCardDesign>
               <div className="h-32 w-20 mx-auto">
                    <Image src={laptop} />
                  </div>
                  <div>
                    <h3 className="text-black text-sm font-semibold">
                      MacBook
                    </h3>
                    <p  className="text-black text-xs" >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo, vel. Voluptate, quisquam.
                    </p>
                  </div>
               </SCardDesign>
              </div>  
     
    )
}

export default FirstProducts
