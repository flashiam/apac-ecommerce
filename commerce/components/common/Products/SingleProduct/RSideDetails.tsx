type mainProduct = {
  main: ProductDetails
}
type ProductDetails = {
  name: string
  works_with: string
  price: string
  dis: string
  warranty: string
  cond: string
  details: string
}

const RSideDetails = (props: mainProduct) => {
  const { name, works_with, price, dis, warranty, cond, details } = props.main
  return (
    <>
      <div className="md:w-1/2 w-full flex-1 block md:border-0 sm:border-2 border-gray-400 rounded-sm p-4 md:bg-white bg-gray-100">
        <h1 className="md:text-2xl md:text-black font-medium md:block sm:hidden">
          {name}
        </h1>
        <p className="sm:hidden md:my-2 md:block text-gray-600 font-light text-xs">
          Works with :{works_with}
        </p>
        {/* 3 BOXES */}
        <div className="my-2 md:block h-0.5 w-full bg-gray-400 sm:hidden"></div>
        <h2 className="sm:mb-1 text-black md:my-1 text-xl font-medium">
          {price}
        </h2>
        <h5 className="text-black my-1 text-base font-normal">{dis}</h5>
        <h5 className="text-black my-1 text-sm font-thin">{cond}</h5>
        <div className="my-2 md:block h-0.5 w-full bg-gray-400 sm:hidden"></div>
        <h5 className="text-black my-1 text-sm font-thin">{cond}</h5>
        <h5 className="text-black mt-1 text-sm font-thin">{details}</h5>

        <button className="mt-6 transition-colors duration-200 bg-primary md:block rounded-sm w-full md:bg-violet md:w-4/5 py-2 hover:bg-purple-500 hidden text-white">
          See more
        </button>
        {/* <Button/> */}
      </div>
    </>
  )
}

export default RSideDetails
