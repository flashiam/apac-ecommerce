import React,{FC} from 'react'
import Link from "next/link"
type Props ={
flips:BulkLinks[];
}

interface BulkLinks {
  category:string,
  main:BulkLinks2[],

}
interface BulkLinks2 {
phone:string,
links:string[]
}


const SideLinks:FC<Props> = (props) => {
    return (
        <>
             {props.flips.map((l, i) => (
                  <li key={i}>
                    <Link href="#!">
                      <a className="text-gray-600 text-sm font-light">
                        {l.category}
                      </a>
                    </Link>
                    {/*Child */}
                    <ul className="list-inside ml-3">
                      {l.main.map((m, i) => (
                        <li key={i}>
                          <Link href="#!">
                            <a className="text-gray-600 text-xs font-light">
                              {m.phone}
                            </a>
                          </Link>
                          {/*Nested child */}
                          <ul className="list-inside ml-3">
                            {m.links.map((n, i) => (
                              <li key={i}>
                                <Link href="#!">
                                  <a className="text-gray-600 text-2xs font-light">
                                    {n}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
              ))}
        </>
    )
}

export default SideLinks
