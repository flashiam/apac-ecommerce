import React, { useEffect, useState, memo } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { GlobalState, MyOrderedItem } from 'data1'
import { saveOrderItems } from 'actions/paymentAction'
import { clearCartItems } from 'actions/productAction'

const PaypalCheckout = () => {
  const { totalCartPrice, cartItems } = useSelector(
    (state: GlobalState) => state.product
  )
  const [orders, setOrders] = useState<MyOrderedItem[]>([])
  const dispatch = useDispatch()

  // Function to redirect to order detail page
  const redirectToOrder = (_: any, data: any) => {
    // Transfer all the cart items to order items when transaction gets successful
    dispatch(saveOrderItems(orders, data.orderID))
    // Also clear the cart items
    dispatch(clearCartItems())
    router.prefetch('/order_detail')
    router.push({ pathname: '/order_detail' })
  }

  // Function to transfer cart items to order items
  const transferToOrder = () => {
    const items: MyOrderedItem[] = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      delivered: false,
      img: item.img,
    }))
    setOrders(items)
  }

  useEffect(() => {
    transferToOrder()
  }, [])

  return (
    <PayPalButton
      amount={totalCartPrice}
      options={{
        clientId:
          'AdsdR5j2oIIrY25tNf-3Xdq83_9DKiL62GnAzIM6q7dbPUVd6S4JzjQVAh0AuRLTE6ndHawunBQUecYU',
      }}
      onSuccess={(details: object, data: object) =>
        redirectToOrder(details, data)
      }
    />
  )
}

export default memo(PaypalCheckout)
