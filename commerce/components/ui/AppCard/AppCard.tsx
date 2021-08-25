import React from 'react'
import Image from 'next/image'

type Props = {
  children: any
}

const AppCard = ({ children }: Props) => {
  return (
    <div className="p-8 bg-white rounded-md border-2 border-gray-200">
      {children}
    </div>
  )
}

export default AppCard
