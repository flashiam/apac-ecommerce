import { Input, Button } from '@components/ui'
import React, { ChangeEvent, FC, useState } from 'react'
import { Address, MyOrderedItem } from 'data1'
import { useDispatch } from 'react-redux'
import { addAddress } from 'actions/customerAction'
import { uuid } from 'uuidv4'
import router from 'next/router'
import { selectOrderAddress } from '../../actions/paymentAction'

const AddressForm: FC = () => {
  const [address, setAddress] = useState<Address>({
    id: '',
    city: '',
    state: '',
    pincode: 0,
    houseno: '',
    street: '',
    landmark: '',
  })
  const [orders, setOrders] = useState<MyOrderedItem[]>([])

  const addressForm = [
    {
      id: 1,
      label: 'House no.',
      placeholder: 'House no',
      value: 'houseno',
    },
    {
      id: 2,
      label: 'Landmark',
      placeholder: 'Landmark',
      value: 'landmark',
    },
    {
      id: 3,
      label: 'Street',
      placeholder: 'Street',
      value: 'street',
    },
    {
      id: 4,
      label: 'City',
      placeholder: 'City',
      value: 'city',
    },
    {
      id: 5,
      label: 'State',
      placeholder: 'State',
      value: 'state',
    },
    {
      id: 6,
      label: 'Pincode',
      placeholder: 'Pincode',
      value: 'pincode',
    },
  ]

  const dispatch = useDispatch()
  // Function to set address
  const onInputAddress = (attr: string, val: string) => {
    // console.log(val)
    setAddress({
      ...address,
      [attr]: val,
    })
  }

  const submitAddress = (e: any) => {
    e.preventDefault()
    address.id = uuid()
    // Save the address
    dispatch(addAddress(address))

    // Use this address for shipping
    dispatch(selectOrderAddress(address))
    router.push('/checkout')
  }

  return (
    <form
      className="flex flex-col justify-between p-1 mt-3"
      onSubmit={submitAddress}
    >
      <div className="grid grid-cols-2 gap-8">
        {addressForm.map((form) => (
          <div key={form.id}>
            <label htmlFor={form.value} className="block pb-2 font-medium">
              {form.label}
            </label>
            <Input
              onChange={(val) => onInputAddress(form.value, val)}
              placeholder={form.placeholder}
              style={{
                padding: '0.6rem 0.8rem',
                width: `${form.id === 6 && 'rem'}`,
              }}
            />
          </div>
        ))}
      </div>
      <Button
        style={{
          padding: '0.6rem 2rem',
          display: 'block',
          marginTop: '1.5rem',
          width: '15%',
          maxWidth: '50rem',
        }}
        className="mt-8"
      >
        Save Address
      </Button>
    </form>
  )
}

export default AddressForm
