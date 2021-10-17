import React, { FC } from 'react'
import { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  productId: string
}

const SCardDesign: FC<Props> = ({ productId, ...props }) => {
  return (
    <Link href={`items/${productId}`}>
      <a className="hover:bg-white bg-xxmain2 block p-4 duration-150 transition-shadow hover:shadow-xl rounded-md">
        {props.children}
      </a>
    </Link>
  )
}

export default SCardDesign
