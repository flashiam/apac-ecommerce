import { useRouter } from 'next/router'
import { v4 } from 'uuid'
import type { MProduct } from '../../../../data1'

type mainProduct = {
  main: MProduct
}
// type ProductDetails = {
//   name: string
//   works_with: string
//   price: string
//   dis: string
//   warranty: string
//   cond: string
//   details: string
// }

const RSideDetails = (props: mainProduct) => {
  const {
    name,
    works_with,
    price,
    dis,
    totalReview,
    qna,
    priceoff,
    warranty,
    cond,
    details,
    rating,
    description,
  } = props.main
  const router = useRouter()

  const id = v4()
  const cartHandler = () => {
    const check: any = localStorage.getItem(id)
    const getCheck = JSON.parse(check)
    if (getCheck) {
      localStorage.setItem(
        id,
        JSON.stringify([...getCheck, { name, price, dis, details }])
      )
    } else {
      localStorage.setItem(id, JSON.stringify([{ name, price, dis, details }]))
    }

    router.push(`/cart/${id}`)
  }
  return (
    <>
      <div className="sm:px-4 md:px-4 scrollbar md:overflow-y-scroll md:w-1/2 p-2 sm:w-full md:flex-1 block rounded-sm  m-0 mt-4 sm:block md:bg-white bg-gray-200 ">
        <h2 className="md:self-start text-black-400 text-2xl font-bold mb-3">
          Our very best Refurbished {name}:
        </h2>
        <div className="flex justify-between items-center">
          <h1 className="md:text-xl md:text-black font-medium md:block sm:hidden">
            {price} &nbsp;{' '}
            <span className="font-extralight text-sm text-gray-400 relative">
              <span className="absolute bottom-1/2 inline-block bg-gray-500 h-0.5 w-10"></span>
              {priceoff}
            </span>
          </h1>
          <div className=" md:flex gap-2 flex justify-between items-center md:justify-between md:items-center ">
            <span className="md:text-md font-medium">
              {' '}
              <span className="md:text-2xl sm:text-2xl font-bold">D</span>
              iscount
            </span>
            <div className="md:h-12 md:w-12 md:text-gray-900 bg-white rounded-full w-10 h-10 md:bg-gray-200 md:rounded-full items-center justify-center md:flex flex md:items-center md:text-lg md:justify-center font-semibold">
              {dis}
            </div>
          </div>
        </div>

        <div className="flex gap-1 items-center">
          {/* <span className=""> */}
          <span className="material-icons flex items-center justify-between text-yellow-500 ">
            star{' '}
          </span>
          <span className="text-sm text-black">
            {rating}
            {/* </span> */}
          </span>

          <div className="my-2  h-4 w-0.5 bg-gray-700"></div>

          <span className="text-black text-sm font-normal">
            {totalReview} Reviews
          </span>

          <div className="my-2  h-4 w-0.5 bg-gray-700"></div>
          <span className="text-black text-sm font-normal">{qna} QnA</span>
        </div>
        <p className="sm:hidden md:my-2 md:block text-gray-600 font-light text-xs">
          Works with :{works_with}
        </p>
        {/* 3 BOXES */}
        <div className="my-2 md:block h-0.5 w-full bg-gray-400 sm:hidden"></div>
        {/* <h2 className="sm:mb-1 text-black md:my-1 text-xl font-medium">
          {price}
        </h2> */}
        {/* <h5 className="text-black my-1 text-base font-normal">{dis}</h5>
        <h5 className="text-black my-1 text-sm font-thin">{cond}</h5> */}
        {/* <div className="my-2 md:block h-0.5 w-full bg-gray-400 sm:hidden"></div> */}
        {/* <h5 className="text-black my-1 text-sm font-thin">{cond}</h5> */}
        <div>
          <h5 className="text-black my-1 text-base font-semibold mb-2">
            About this item
          </h5>
          <p className="text-black text-sm font-base">{description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            tempore fugiat molestias voluptatum vel magnam, reprehenderit in ab
            ullam! Debitis voluptatum ipsum inventore laborum quas velit nisi
            blanditiis doloribus animi reprehenderit quo tempora esse,
            perspiciatis natus, eveniet enim delectus. Hic dolore sequi facilis
            recusandae optio repellat magni delectus consequuntur quod nisi quae
            aspernatur, officia sint, dolorem ab laboriosam excepturi tempore
            accusantium nihil culpa, ea beatae consequatur quo. Suscipit error
            architecto tempora perspiciatis laudantium debitis optio asperiores!
            Porro iure nihil cupiditate ipsum dolor exercitationem quae itaque
            mollitia. Perspiciatis hic esse nesciunt consectetur, suscipit
            repellendus veniam eius praesentium obcaecati eos autem, doloremque
            totam harum officia. Maiores vel fuga esse, fugiat quasi quas
            dolorum est debitis rem incidunt. Deleniti optio eos at doloremque
            accusantium dolor, fugiat odit accusamus, a libero repellat est ea
            illum fugit dolorum odio nisi in molestiae dignissimos itaque
            eligendi. Perspiciatis praesentium veritatis illum quam ipsum
            dolores tempore eveniet pariatur dolor debitis exercitationem
            recusandae voluptatum, ad quidem fuga, deleniti repudiandae sit?
            Libero possimus debitis cumque! Corrupti fuga vero quo maxime! Totam
            dicta facilis inventore vitae autem, molestiae qui tempore. Itaque
            sunt numquam corrupti harum tempore? Neque ad dolor ab quis deleniti
            quam autem consectetur doloremque doloribus excepturi distinctio
            rerum inventore totam saepe possimus magni labore at ipsa assumenda
            natus nisi praesentium, animi perferendis nostrum. Dolorum suscipit
            nostrum, praesentium neque ipsa delectus tempore quidem est nihil
            omnis saepe veritatis aliquam, totam similique nam esse quod
            asperiores porro itaque unde quibusdam maiores libero possimus
            inventore! Exercitationem, voluptatum facilis, quidem tempora
            repellat debitis adipisci veritatis commodi impedit provident quae
            est blanditiis magni dolorem totam numquam minus. Facere sit soluta
            ab fugit ipsa in perferendis eius similique magni voluptate
            necessitatibus a quaerat ducimus ullam animi illo, inventore
            temporibus laborum nobis sunt nesciunt debitis incidunt accusantium.
            Nam ipsum excepturi eum sequi dolores blanditiis exercitationem
            nesciunt at quia porro quibusdam, explicabo eligendi id in
            repudiandae odio provident illo eaque, non rem perferendis
            dignissimos expedita commodi. Totam nobis commodi optio qui ducimus
            beatae excepturi numquam saepe officia. Vero saepe nobis porro illum
            laborum ea placeat quo itaque assumenda, ipsum quasi cum deleniti
            asperiores officiis modi facilis non voluptate iure voluptas. Magni
            itaque esse numquam. Quia, officiis rem exercitationem dicta
            incidunt corporis minus nihil, optio quos cumque nulla! Rerum velit
            officia reiciendis aliquid harum rem fuga porro nam minus natus
            ullam necessitatibus laboriosam nesciunt quis repellat accusantium,
            nemo, non voluptates ea vel explicabo provident! Placeat aliquam, ut
            neque modi debitis hic vitae? Dolor debitis dolore dolores,
            quibusdam possimus dicta assumenda minus quos optio quisquam, quasi
            consectetur neque officiis reprehenderit non facere eveniet fugiat
            magni nam vel sapiente obcaecati amet rem. Vitae commodi sed
            voluptates dolor minima ad maxime laboriosam reprehenderit
            dignissimos maiores non quas, aperiam vero distinctio quis!
          </p>
        </div>

        {/* <div className="flex items-center gap-3">
        <button className="mt-6 transition-colors duration-200 bg-black  md:inline-block rounded-sm w-full  md:w-1/2 py-2 hover:bg-gray-800 hidden text-white">
          Add To Cart
        </button>
        <button onClick={cartHandler}  className="mt-6 transition-colors duration-200 bg-gray-100 border-2 border-black md:inline-block rounded-sm w-full  md:w-1/2 py-2  hidden hover:bg-white text-black">
          Buy Now
        </button>
        </div> */}
      </div>
    </>
  )
}

export default RSideDetails
