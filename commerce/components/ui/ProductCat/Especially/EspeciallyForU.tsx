import React from 'react'

type Props = {
    children: any
  }
const EspeciallyForU = ({children}:Props) => {
    return (
        <div className="border-1 bg-xxmain border-grey-200 bg-white p-4 rounded-md hover:shadow-2xl ">
            {children}
        </div>
    )
}

export default EspeciallyForU
