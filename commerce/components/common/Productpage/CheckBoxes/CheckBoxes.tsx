import React, { useState, useEffect } from 'react'
import ListCBox from '@components/common/Checkbox/P_Page/ListCBox'
import ProductCategory from '../ProductCategory/ProductCategory'

interface CategoryItem {
  category: string
  value: string | number
}

interface Category {
  catTitle: string
  catOptions: CategoryItem[]
}

const ramCategory: Category = {
  catTitle: 'Ram',
  catOptions: [
    {
      category: 'ram',
      value: '4gb',
    },
    {
      category: 'ram',
      value: '6gb',
    },
    {
      category: 'ram',
      value: '8gb',
    },
  ],
}

const storageCategory: Category = {
  catTitle: 'Storage',
  catOptions: [
    {
      category: 'storage',
      value: '456gb',
    },
    {
      category: 'storage',
      value: '600gb',
    },
    {
      category: 'storage',
      value: '64gb',
    },
  ],
}

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
  // All checkbox will be unchecked initially
  const [checks, setChecks] = useState<boolean[]>(
    Array(conditions.length).fill(false)
  )
  // State containing the options selected by user
  const [selectedOptions, setOptions] = useState<string[]>([])

  // Function to change the state of multiple checkboxes
  const onCheckChange = (checkIndex: number) => {
    // Toggling each check from the array
    const updatedChecks = checks.map((check, i) =>
      i === checkIndex ? !check : check
    )
    setChecks(updatedChecks)
    // Filtering out the conditions array according to the updated checks array
    const selected = conditions.filter((_, i) => updatedChecks[i])
    setOptions(selected)
  }

  return (
    <>
      <div className="py-4">
        <ProductCategory
          changer="1"
          categoryData={ramCategory}
          getSelectedOptions={(options: Category[]) => console.log(options)}
        />
        {/* <h2 className="text-black font-medium">Conditions</h2>
        {conditions.map((c, i) => (
          <ListCBox
            key={i}
            value={c}
            changer="1"
            numIndex={i}
            checked={checks[i]}
            onCheckChange={onCheckChange}
          />
        ))} */}
      </div>
      {/* I want a phone for... */}
      <div className="py-4">
        <ProductCategory
          changer="2"
          categoryData={storageCategory}
          getSelectedOptions={(options: CategoryItem) => console.log(options)}
        />
      </div>
      <div className="py-4">
        <h2 className="text-black font-medium">I want a phone for...</h2>
        {iwantphone.map((k, i) => (
          <ListCBox
            key={i}
            changer="2"
            value={k}
            numIndex={i}
            checked={false}
            onCheckChange={onCheckChange}
          />
        ))}
      </div>
      {/* ... And that is */}
      <div className="py-4">
        <h2 className="text-black font-medium">Color</h2>
        {colorOfPhone.map((l, i) => (
          <ListCBox
            key={i}
            value={l}
            changer="3"
            numIndex={i}
            checked
            onCheckChange={onCheckChange}
          />
        ))}
      </div>
      {/* Delivery */}
      <div className="py-4">
        <h2 className="text-black font-medium">Delievery</h2>
        {delievery.map((m, i) => (
          <ListCBox
            key={i}
            value={m}
            changer="4"
            numIndex={i}
            checked
            onCheckChange={onCheckChange}
          />
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
            checked
            onCheckChange={onCheckChange}
          />
        ))}
      </div>
    </>
  )
}

export default CheckBoxes
