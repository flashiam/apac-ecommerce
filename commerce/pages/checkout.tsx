import React from 'react'
// import ReactDOM from 'react-dom'
import { Layout } from '@components/common'
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

// const PaypalButton = paypal?.Buttons.driver('react', { React, ReactDOM })
// Function to create one time transaction
// const onCreateOrder = (data,actions) => {

// }
// window.paypal

const Checkout = () => {
  return (
    <div>hello</div>
    // <PayPalScriptProvider
    //   options={{
    //     'client-id':
    //       'AdsdR5j2oIIrY25tNf-3Xdq83_9DKiL62GnAzIM6q7dbPUVd6S4JzjQVAh0AuRLTE6ndHawunBQUecYU',
    //   }}
    // >
    //   <PayPalButtons
    //     style={{ layout: 'horizontal', color: 'black' }}
    //     createOrder={(data, actions) => {
    //       return actions.order.create({
    //         purchase_units: [
    //           {
    //             amount: {
    //               value: '150',
    //             },
    //           },
    //         ],
    //       })
    //     }}
    //   />
    // </PayPalScriptProvider>
  )
}

export default Checkout
Checkout.Layout = Layout
