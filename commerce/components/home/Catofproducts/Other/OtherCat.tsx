import SCardDesign from "@components/common/CardDesign/SCardDesign"
import Image from "next/image"
import mobile2 from "../../../../public/assets/img/mobile2.png"

interface Props{
  numIndex: number 
otherCat:{name:string,details:string}

}

const otherCat = {
  name: "MacBook",
  details:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, vel. Voluptate, quisquam."
}
const OtherCat = (props: Props) => {
  
  const {name,details}=props.otherCat

    return (
        
           <div
                
                className={`${
                  props.numIndex <= 1 ? 'md:col-span-3  col-span-3 ' : 'md:col-span-2 md:block hidden'
                }`}>
                <SCardDesign>
                <div className="w-20 h-30 mx-auto">
                    <Image src={mobile2} alt="product" />
                  </div>
                  <div>
                    <h3 className="text-black text-sm font-semibold">
                      {name}
                    </h3>
                    <p>
                     {details}
                    </p>
                  </div>
                </SCardDesign>
              </div>  
        
    )
}
export default OtherCat