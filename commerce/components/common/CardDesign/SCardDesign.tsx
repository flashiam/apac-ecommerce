import React from 'react'
import { ReactNode } from 'react'
import Link from 'next/link'
const SCardDesign = ({children}:{children:ReactNode}) => {
    return (
        <Link href="!#">
             <a  className="hover:bg-white bg-xxmain block p-4 hover:shadow-2xl rounded-md">
            {children}
        </a>
        </Link>
       
    )
}

export default SCardDesign
