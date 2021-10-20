import React, { useEffect, memo } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import router from 'next/router'
import { useSelector } from 'react-redux'
import { ProductState, GlobalState } from 'data1'

const PaypalCheckout = () => {
  const totalPrice = useSelector(
    (state: GlobalState) => state.product.totalCartPrice
  )

  // Function to redirect to order detail page
  const redirectToOrder = (details: any, data: any) => {
    router.push({ pathname: '/order_detail', query: { orderid: data.orderID } })
  }

  useEffect(() => {
    console.log(totalPrice)
  }, [totalPrice])

  return (
    <PayPalButton
      amount={totalPrice}
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
