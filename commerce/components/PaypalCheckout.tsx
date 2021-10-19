import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

const PaypalCheckout = () => {
  return (
    <PayPalButton
      amount={500}
      options={{
        clientId:
          'AdsdR5j2oIIrY25tNf-3Xdq83_9DKiL62GnAzIM6q7dbPUVd6S4JzjQVAh0AuRLTE6ndHawunBQUecYU',
      }}
      onSuccess={(details: object, data: object) => console.log(details, data)}
    />
  )
}

export default PaypalCheckout
