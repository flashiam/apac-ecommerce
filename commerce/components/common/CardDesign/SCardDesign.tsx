import React from 'react'
import { ReactNode } from 'react'
import Link from 'next/link'
const SCardDesign = ({children}:{children:ReactNode}) => {
    return (
        <Link href="/page1">
             <a  className="hover:bg-white bg-xxmain block p-4 duration-150 transition-shadow hover:shadow-xl rounded-md">
            {children}
        </a>
        </Link>
       
    )
}

export default SCardDesign
