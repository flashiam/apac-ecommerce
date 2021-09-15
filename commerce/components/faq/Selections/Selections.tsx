import React from 'react'

interface Props {
selection: {
    icon:string,
    name:string,
}
}
const Selections = ({selection}:Props) => {
    return (
        <>
              <li  className="px-3 py-2 flex items-center hover:bg-purple-300 cursor-pointer">
             <span className="flex space-x-3 justify-between"> <span className="material-icons">{selection.icon}</span>
              <span className="w-12 font-medium">{selection.name}</span></span>
            </li>
        </>
    )
}

export default Selections
