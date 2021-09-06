import React, { useState, useEffect } from 'react'
import ListCBox from '../../Checkbox/P_Page/ListCBox'

interface CategoryItem {
  category: string
  value: string | number
}

interface Category {
  catTitle: string
  catOptions: CategoryItem[]
}

type Props = {
  changer: string
  categoryData: Category
  getSelectedOptions: Function
}

const ProductCategory = ({
  changer,
  categoryData,
  getSelectedOptions,
}: Props) => {
  const { catTitle, catOptions } = categoryData

  // All checkbox will be unchecked initially
  const [checks, setChecks] = useState<boolean[]>(
    Array(catOptions.length).fill(false) // checks = [false,true,false]
  )
  // State containing the options selected by user
  const [selectedOptions, setOptions] = useState<CategoryItem[]>([])

  // Function to change the state of multiple checkboxes
  const onCheckChange = (checkIndex: number) => {
    // Toggling each check from the array
    const updatedChecks = checks.map((check, i) =>
      i === checkIndex ? !check : check
    )
    setChecks(updatedChecks)
    // Filtering out the conditions array according to the updated checks array
    const selected = catOptions.filter((_, i) => updatedChecks[i])
    setOptions(selected)
  }

  useEffect(() => {
    getSelectedOptions(selectedOptions)
  }, [selectedOptions])

  return (
    <>
      <h2 className="text-black font-medium">{catTitle}</h2>
      {catOptions.map((option, i) => (
        <ListCBox
          key={i}
          value={option.value}
          changer={changer}
          numIndex={i}
          checked={checks[i]}
          onCheckChange={onCheckChange}
        />
      ))}
    </>
  )
}

export default ProductCategory
