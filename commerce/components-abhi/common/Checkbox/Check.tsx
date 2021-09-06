import React from 'react'

type Props = {
  label: string
}

const Check = ({ label }: Props) => {
  return (
    <div className="flex items-center justify-start">
      <div className="relative h-5 w-5 flex justify-center items-center mr-1">
        <input
          id={`check2-23`}
          type="checkbox"
          className="absolute appearance-none checked:bg-black checked:border-transparent h-5 w-5 border-2 border-gray-600 rounded-md mr-2 inline-block"
        />
        <i className="material-icons text-sm text-gray-100 transform -translate-x-1/2 ml-1 pointer-events-none">
          check
        </i>
      </div>
      <label htmlFor={`check2-23`} className="text-base text-cbcolor">
        {label}
      </label>
    </div>
  )
}

export default Check
