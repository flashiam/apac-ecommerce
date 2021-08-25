import React from 'react'

type Props = {
    children: any
  }
const EspeciallyForU = ({children}:Props) => {
    return (
        <div className="border-2 border-grey-200 bg-white p-4 rounded-md">
            {children}
        </div>
    )
}

export default EspeciallyForU
