import React,{FC} from 'react'
import Link from 'next/link'






const LinksOfProducts= ({pl}:any) => {
  
    return (
        <>
             <div className="my-6 text-center">
                    <Link href="!#">
                      <a className="font-semibold">Laptops & Computers</a>
                    </Link>
                    {pl.map((l:string, i:number) => (
                      <h3 key={i}>
                        {' '}
                        <Link href="!#">
                          <a className="text-sm text-gray-500">{l.link}</a>
                        </Link>
                      </h3>
                    ))}
                  </div>
        </>
    )
}

export default LinksOfProducts
