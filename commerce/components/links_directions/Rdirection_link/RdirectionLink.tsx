import React from 'react'
import Link from 'next/link'
interface Props {
    linkText:string
}

const RdirectionLink = ({linkText}:Props) => {
    return (
        
               <div className="flex justify-end">
            <Link href="!#">
              <a className="text-black text-lg font-semibold my-3">
                
            {linkText}
              </a>
            </Link>
          </div>
        
    )
}

export default RdirectionLink
