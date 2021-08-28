import React from 'react'
import Image from 'next/image'
import laptop1 from "../../../../public/assets/img/mobile1.png"
import SCardDesign from '@components/common/CardDesign/SCardDesign'

const SimpleCard = () => {
    return (
     
            <SCardDesign >
                <h5 className="text-black font-bold">Flash sale</h5>
                <div className="w-20 h-40 mx-auto">
                <Image src={laptop1} />
                </div>
            <h3 className="text-black-700 font-medium">Bose SoundSport Earbud Bluetooth</h3>
            <h4 className="text-gray-500 font-thin">Warranty: 12 months</h4>
            <h4 className="font-normal text-black">$56.99</h4>
            </SCardDesign>
          
       
    )
}

export default SimpleCard
