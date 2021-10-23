import SCardDesign from '@components/common/CardDesign/SCardDesign'
import Image from 'next/image'
import mobile2 from '../../../../public/assets/img/mobile2.png'

interface Props {
  numIndex: number
  otherCat: { name: string; details: string }
}

const otherCat = {
  name: 'MacBook',
  details:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, vel. Voluptate, quisquam.',
}
const OtherCat = (props: Props) => {
  const { name, details } = props.otherCat

  return (
    <div
      className={`${
        props.numIndex <= 2
          ? 'md:col-span-4  sm:col-span-2 col-span-3 '
          : 'md:col-span-3 sm:col-span-2 md:block hidden'
      }`}
    >
      <SCardDesign productId="1200">
        <div className="w-20 h-30 mx-auto">
          <Image src={mobile2} alt="product" />
        </div>
        <div>
          <h3 className="text-black text-sm font-semibold">{name}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, tenetur.
          </p>
        </div>
      </SCardDesign>
    </div>
  )
}
export default OtherCat
