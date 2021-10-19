import { ChangeEvent, FocusEventHandler, useEffect, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import s from './CartItem.module.css'
import { Trash, Plus, Minus, Cross } from '@components/icons'
import { useUI } from '@components/ui/context'
import type { LineItem } from '@commerce/types/cart'
import usePrice from '@framework/product/use-price'
import useUpdateItem from '@framework/cart/use-update-item'
import useRemoveItem from '@framework/cart/use-remove-item'
import Quantity from '@components/ui/Quantity'
import { CartProduct } from '../../../data1'
import { useDispatch } from 'react-redux'
import {
  removeCartItem,
  updateCartQuantity,
} from '../../../actions/productAction'

type ItemOption = {
  name: string
  nameId: number
  value: string
  valueId: number
}

type Props = {}

const CartItem = ({
  item,
  variant = 'default',
  currencyCode,
  ...rest
}: {
  variant?: 'default' | 'display'
  item: CartProduct
  currencyCode: string
}) => {
  const dispatch = useDispatch()

  const { closeSidebarIfPresent } = useUI()
  const [removing, setRemoving] = useState(false)
  const [quantity, setQuantity] = useState<number>(item.quantity)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [price, setPrice] = useState<number>(item.price)
  const removeItem = useRemoveItem()
  const updateItem = useUpdateItem({ item })

  const { id: productId } = item
  // const { price } = usePrice({
  //   amount: item.variant.price * item.quantity,
  //   baseAmount: item.variant.listPrice * item.quantity,
  //   currencyCode,
  // })

  const handleChange = async ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(value))
    await updateItem({ quantity: Number(value) })
  }
  // Function to update the cart price when user increase the quantity
  const onUpdateQuantity = () => {
    dispatch(updateCartQuantity(item.id, quantity))
  }

  // const increaseQuantity = async (n:any) => {

  //   const val = Number(quantity) + n
  //   setQuantity(val)
  //   console.log(val)
  //   await updateItem({ quantity: val })
  //   setPrice(item.price * val)
  // }

  // const decreaseQuantity = async (qty: number) => {

  //   setQuantity(qty)
  //   // console.log(val)
  //   setPrice(item.price * val)
  // }

  // Function to increase the quantity
  const increaseQuantity = () => {
    const itemQty = quantity + 1
    let updatedPrice = 0
    setQuantity(itemQty)
    updatedPrice = item.price * itemQty
    console.log(updatedPrice)
    setPrice(updatedPrice)
    console.log(itemQty)
  }

  // Function to decrease the quantity
  const decreaseQuantity = () => {
    let itemQty = quantity

    if (itemQty === 1) {
      itemQty = 1
    } else {
      itemQty = quantity - 1
    }

    setQuantity(itemQty)
    let updatedPrice = 0
    updatedPrice = price - item.price
    // if (quantity === 1) {
    //   updatedPrice = item.price
    // } else {
    //   updatedPrice = price - item.price
    // }
    setPrice(updatedPrice)
  }

  const handleRemove = async () => {
    setRemoving(true)
    try {
      await removeItem(item)
    } catch (error) {
      setRemoving(false)
    }

    // Remove through reduce
    dispatch(removeCartItem(productId))
  }

  // Function to calculate price
  const calcPrice = () => {
    setPrice(price * quantity)
  }

  // TODO: Add a type for this
  const options = (item as any).options
  useEffect(() => {
    // Reset the quantity state if the item quantity changes
    if (item.quantity !== Number(quantity)) {
      setQuantity(item.quantity)
    }
    // TODO: currently not including quantity in deps is intended, but we should
    // do this differently as it could break easily
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.quantity])

  useEffect(() => {
    // setPrice(quantity * item.price)
    onUpdateQuantity()
    // console.log(price)
  }, [quantity])

  useEffect(() => {
    console.log(price)
  }, [])

  return (
    <li
      className={cn(s.root, {
        'opacity-50 pointer-events-none': removing,
      })}
      {...rest}
    >
      <div className="flex flex-row space-x-4 py-4">
        <div className="w-16 h-16 bg-violet relative overflow-hidden cursor-pointer z-0">
          <Link href={`/items/${item.id}`} passHref={false}>
            <Image
              onClick={() => closeSidebarIfPresent()}
              className={s.productImage}
              width={150}
              height={150}
              src={item.img}
              alt={item.name}
              unoptimized
            />
          </Link>
        </div>
        <div className="flex-1 flex flex-col text-base">
          <Link href={`/items/${item.id}`} passHref={false}>
            <span
              className={s.productName}
              onClick={() => closeSidebarIfPresent()}
            >
              {item.name}
            </span>
          </Link>
          {options && options.length > 0 && (
            <div className="flex items-center pb-1">
              {options.map((option: ItemOption, i: number) => (
                <div
                  key={`${item.id}-${option.name}`}
                  className="text-sm font-semibold text-accent-7 inline-flex items-center justify-center"
                >
                  {option.name}
                  {option.name === 'Color' ? (
                    <span
                      className="mx-2 rounded-full bg-transparent border w-5 h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden"
                      style={{
                        backgroundColor: `${option.value}`,
                      }}
                    ></span>
                  ) : (
                    <span className="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden">
                      {option.value}
                    </span>
                  )}
                  {i === options.length - 1 ? '' : <span className="mr-3" />}
                </div>
              ))}
            </div>
          )}
          {variant === 'display' && (
            <div className="text-sm tracking-wider">{quantity}</div>
          )}
        </div>
        <div className="flex flex-col justify-between space-y-2 text-sm">
          <span>${price}</span>
        </div>
      </div>
      {variant === 'default' && (
        <Quantity
          value={quantity}
          handleRemove={handleRemove}
          handleChange={handleChange}
          increase={increaseQuantity}
          decrease={decreaseQuantity}
        />
      )}
    </li>
  )
}

export default CartItem
