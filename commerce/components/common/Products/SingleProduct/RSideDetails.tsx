import { useRouter } from "next/router"
import {v4} from "uuid"
import type {MProduct}  from "../../../../data1"

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

const RSideDetails = (props:mainProduct ) => {
  const { name, works_with, price, dis,totalReview,qna,priceoff, warranty, cond, details,rating ,description } = props.main
  const router = useRouter();

  const id = v4();
  const cartHandler = () => {
        const check:any = localStorage.getItem(id)
        const getCheck=JSON.parse(check)
    if(getCheck){
      localStorage.setItem(id,JSON.stringify([...getCheck,{name,price,dis,details}]))

    } else {
      localStorage.setItem(id,JSON.stringify([{name,price,dis,details}]))
      
    }
  
    router.push(`/cart/${id}`)
  }
  return (
    <>
      <div className=" md:overflow-y-scroll md:w-5/12 flex-none sm:w-full md:flex-1 block rounded-sm p-1 m-0 sm:block md:bg-white bg-gray-100 md:scr" >
        <div className="flex justify-between">
        <h1 className="md:text-2xl md:text-black font-medium md:block sm:hidden">
            {price} &nbsp; <span className="font-extralight text-sm text-gray-400 relative">
              <span className="absolute bottom-1/2 inline-block bg-gray-500 h-0.5 w-10"></span>{priceoff}</span>
          </h1>
          <div className=" md:flex gap-2 md:justify-between md:items-center "><span className="md:text-md font-medium"> <span className="text-2xl font-bold">D</span>iscount</span>
          <div className="md:h-12 md:w-12 md:text-gray-900  md:bg-gray-200 md:rounded-full md:flex md:items-center md:text-lg md:justify-center sm:hidden hidden font-semibold">{dis}
            </div>
          </div>
     
    </div>
    
      

        <div className="flex gap-2 items-center">
          {/* <span className=""> */}
          <span className="material-icons flex items-center justify-between text-yellow-500 ">star <span className="text-sm text-black">{rating}
          {/* </span> */}
            </span>
           
     
          </span>
          
          <div className="my-2  h-4 w-0.5 bg-gray-700"></div>

          <span className="text-black text-sm font-normal">
            {totalReview} Reviews
          </span>

          <div className="my-2  h-4 w-0.5 bg-gray-700"></div>
          <span className="text-black text-sm font-normal">
            {qna} QnA
            </span>


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
        <h5 className="text-black my-1 text-base font-semibold mb-2">About this item</h5>
        <p className="text-black text-sm font-base">{description}</p>
        </div>
       

        <div className="flex items-center gap-3">
        <button className="mt-6 transition-colors duration-200 bg-black  md:inline-block rounded-sm w-full  md:w-1/2 py-2 hover:bg-gray-800 hidden text-white">
          Add To Cart
        </button>
        <button onClick={cartHandler}  className="mt-6 transition-colors duration-200 bg-gray-100 border-2 border-black md:inline-block rounded-sm w-full  md:w-1/2 py-2  hidden hover:bg-white text-black">
          Buy Now
        </button>
        </div>
      
        {/* <Button/> */}
      </div>
    </>
  )
}

export default RSideDetails
