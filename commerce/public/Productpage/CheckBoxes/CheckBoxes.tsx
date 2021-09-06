import ListCBox from '@components/common/Checkbox/P_Page/ListCBox'
import React from 'react'


const iphonesLinks = ['iphone10', 'iphone11', 'iphone11 pro', 'iphone11 max']
const conditions = ['All', 'Excellenet', 'Good', 'Fair']
const iwantphone = ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J']
const storage = ['32gb', '64gb', '128gb', '228gb']
const colorOfPhone = ['Red', 'Blue', 'Purple', 'Green']
const delievery = [
  'All',
  'Two days',
  'Three days',
  'Five days',
  'More than five days',
]
const warranty = [1, 2, 3]

const CheckBoxes = () => {
    return (
        <>
            <div className="py-4">
              <h2 className="text-black font-medium">Conditions</h2>
              {conditions.map((c, i) => (
                <ListCBox key={i} value={c} changer="1" numIndex={i} />
              ))}
            </div>
            {/* I want a phone for... */}
            <div className="py-4">
              <h2 className="text-black font-medium">I want a phone for...</h2>
              {iwantphone.map((k, i) => (
                <ListCBox key={i} changer="2" value={k} numIndex={i} />
              ))}
            </div>
            {/* ... And that is */}
            <div className="py-4">
              <h2 className="text-black font-medium">Color</h2>
              {colorOfPhone.map((l, i) => (
                <ListCBox key={i} value={l} changer="3" numIndex={i} />
              ))}
            </div>
            {/* Delivery */}
            <div className="py-4">
              <h2 className="text-black font-medium">Delievery</h2>
              {delievery.map((m, i) => (
                <ListCBox key={i} value={m} changer="4" numIndex={i} />
              ))}
            </div>
            {/* ... Warranty */}
            <div className="py-4">
              <h2 className="text-black font-medium">Warranty</h2>
              {warranty.map((c, i) => (
                <ListCBox
                  key={i}
                  value={c}
                  changer="5"
                  year="Year"
                  numIndex={i}
                />
              ))}
            </div>
        </>
    )
}

export default CheckBoxes
