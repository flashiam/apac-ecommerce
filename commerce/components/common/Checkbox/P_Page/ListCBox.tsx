import React, { useState } from 'react'
type Props = {
  numIndex: number
  value: any
  year?: string
  changer: string
  checked: boolean
  onCheckChange: Function
}

const ListCBox = (props: Props) => {
  const { numIndex, year, value, changer, checked, onCheckChange } = props
  const [active, setActive] = useState<boolean>(false)

  const ticked = (e: any) => {
    setActive((prev) => !prev)
    console.log(e)
  }
  return (
    <div className="mx-6">
      <input
        id={`check${changer}-${numIndex}`}
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={() => onCheckChange(numIndex)}
      />
      <label htmlFor={`check${changer}-${numIndex}`} className="label">
        <span className="font-light text-sm text-purpleD">
          {value}&nbsp;{year}
        </span>
      </label>
    </div>
  )
}

export default ListCBox
