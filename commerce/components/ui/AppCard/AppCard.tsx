import React from 'react'
import Image from 'next/image'

type Props = {
  children: any
}

const AppCard = ({ children }: Props) => {
  return (
    <div className="p-8 bg-white rounded-md border-2 border-gray-200 flex flex-col items-center justify-center">
      {children}
    </div>
  )
}

export default AppCard
