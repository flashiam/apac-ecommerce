import React, { FC } from 'react'
import type { Main } from '../../../../data1'
import Link from 'next/link'
type Props = {
  flips: Main
}

// interface BulkLinks {
//   links: { link: string; icon: string }[]
//   category: string
//   main: BulkLinks2[]
// }
// interface BulkLinks2 {
//   phone: string
//   slinks: string[]
// }

const SideLinks: FC<Props> = (props) => {
  // const {  } = props.flips
  const { phone, slinks, category } = props.flips
  return (
    <>
      <li>
        <Link href="#!">
          <a className="text-gray-600 text-sm font-light">{category}</a>
        </Link>
        {/*Child */}
        <ul className="list-inside ml-3">
          <li>
            <Link href="#!">
              <a className="text-gray-600 text-xs font-light">{phone}</a>
            </Link>
            {/*Nested child */}
            <ul className="list-inside ml-3">
              {slinks.map((n, i) => (
                <li key={i}>
                  <Link href="#!">
                    <a className="text-gray-600 text-2xs font-light">{n}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </li>
    </>
  )
}

export default SideLinks
