import { useState } from 'react'

export const Ch = () => {
  const conti = [
    {
      id: 1,
      name: 'Africa',
    },
    {
      id: 2,
      name: 'Europe',
    },
    {
      id: 3,
      name: 'Asia',
    },
    {
      id: 4,
      name: 'North America',
    },
    {
      id: 5,
      name: 'South America',
    },
    {
      id: 6,
      name: 'Australia',
    },
    {
      id: 7,
      name: 'Antartica',
    },
    {
      id: 8,
      name: 'Axia',
    },
  ]
  const [checked, setChecked] = useState([])
  const handToggle = (val: any) => {
    // setChecked(!checked)
    const cI = checked.indexOf(val)
    const newChecked = [...checked]

    if (cI === -1) {
      newChecked.push(val)
    } else {
      newChecked.splice(cI, 1)
    }
    setChecked(newChecked)
  }
  return (
    <div>
      {conti.map(({ id, name }, i) => (
        <div key={i}>
          <input
            type="checkbox"
            name={`checkbox-${id}`}
            onChange={() => handToggle(id)}
            id={`check-${id}`}
            checked
          />
          <label className="inline-block ml-1" htmlFor={`check-${i}`}>
            {name}
          </label>
        </div>
      ))}
    </div>
  )
}
