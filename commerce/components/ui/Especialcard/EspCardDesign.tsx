import React from 'react'

type Props = {
    children: any
  }
const EspCardDesign = ({children}:Props) => {
    return (
        <div className="border-1 bg-xxmain border-grey-200 duration-100 transition-shadow bg-white p-4 rounded-md hover:shadow-2xl ">
            {children}
        </div>
    )
}

export default EspCardDesign
