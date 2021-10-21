import { PaymentState } from 'data1'
import { FETCH_ORDER_ITEMS, SELECT_ADDRESS } from 'actions/types'

const initialState: PaymentState = {
  orderid: '',
  selectedAddress: null,
  orderedItems: [],
  charges: { tax: 50, shippingCharge: 5 },
}

const paymentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ORDER_ITEMS:
      return {
        ...state,
        orderedItems: [...state.orderedItems, ...action.payload.orderItems],
        orderid: action.payload.orderid,
      }
    case SELECT_ADDRESS:
      return {
        ...state,
        selectedAddress: action.payload,
      }
    default:
      return state
  }
}

export default paymentReducer
