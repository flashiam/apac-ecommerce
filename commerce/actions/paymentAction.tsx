import { Address, MyOrderedItem } from 'data1'
import { FETCH_ORDER_ITEMS, SELECT_ADDRESS } from './types'

// Function to send the selected address to reducer
export const selectOrderAddress = (address: Address) => (dispatch: any) => {
  dispatch({
    type: SELECT_ADDRESS,
    payload: address,
  })
}

// Function to store the ordered items
export const saveOrderItems =
  (orderItems: MyOrderedItem[], orderid: string) => (dispatch: any) => {
    console.log(orderItems)
    dispatch({
      type: FETCH_ORDER_ITEMS,
      payload: { orderItems, orderid },
    })
  }
