import React, { useState, useEffect } from 'react'
import router from 'next/router'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import { Layout } from '@components/common'
import { Text, Button } from '@components/ui'
import AddressForm from '@components/address_form/AddressForm'
import { useSelector } from 'react-redux'
import { GlobalState } from 'data1'

const SelectAddress = () => {
  const [addAddress, setAddAddress] = useState(false)
  const [sliderRef, slide] = useKeenSlider<HTMLDivElement>({
    duration: 1000,
    controls: false,
    created: (slide) => console.log(slide),
  })

  const customer = useSelector((state: GlobalState) => state.customers)
  const { savedAddresses } = customer

  useEffect(() => {
    addAddress ? slide?.next() : slide?.prev()
  }, [addAddress])

  return (
    <div
      className="md:p-10 sm:p-8 p-6"
      style={{ maxWidth: '1240px', margin: '0 auto' }}
    >
      <div className="flex justify-between items-center">
        <Text variant="pageHeading">My Address</Text>
        <div className="flex justify-end mt-3">
          {!addAddress && (
            <Link href="/checkout">
              <Button
                Component="a"
                className="inline-block"
                style={{ padding: '0.4rem 2rem' }}
              >
                Proceed
              </Button>
            </Link>
          )}
        </div>
      </div>
      {/* Saved addresses */}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide mt-2 pb-3 grid grid-rows-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          <button
            onClick={() => setAddAddress(true)}
            className="bg-gray-50 rounded-md flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-gray-100 border-dotted border-gray-500 border-2"
          >
            <i className="material-icons text-5xl text-gray-500">add</i>
            <h2 className="text-2xl text-gray-500 font-semibold">
              Add Address
            </h2>
          </button>
          {savedAddresses.map((address) => (
            <div
              key={address.id}
              className="bg-gray-50 shadow-md rounded-md flex items-start justify-start p-4"
            >
              <input
                type="radio"
                name="address"
                value="home"
                className="mt-1 text-black focus:ring-black"
              />
              <div className="ml-2">
                <h3 className="text-lg font-medium">Home</h3>
                <ul className="text-sm">
                  <li>
                    {address.houseno} near {address.landmark}
                  </li>
                  <li>
                    {address.street}, {address.city} ({address.state})
                  </li>
                  <li>{address.pincode}</li>
                </ul>
                <div className="pt-3">
                  <button className="underline mr-3 text-red">Delete</button>
                  <button className="underline">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="keen-slider__slide">
          <button
            className="flex items-center"
            onClick={() => {
              setAddAddress(false)
              slide.prev()
            }}
          >
            <i className="material-icons">chevron_left</i>
            Prev
          </button>
          <AddressForm />
        </div>
      </div>
      {/* <Button onClick={() => setAddAddress(true)}>
          {addAddress ? 'Save address' : 'Add new address'}
        </Button> */}
    </div>
  )
}

export default SelectAddress
SelectAddress.Layout = Layout
