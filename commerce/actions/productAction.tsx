import { CartProduct } from 'data1'
import { ADD_TO_CART, FETCH_CART_ITEMS, REMOVE_CART_ITEM } from './types'

// Function to add a cart item to state
export const addCartItem = (item: CartProduct) => (dispatch: any) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  })
}

// Function to fetch cart items
export const fetchCartItems = () => (dispatch: any) => {
  const savedItems: any = localStorage.getItem('cart-items')
  const cartItems = JSON.parse(savedItems)
  dispatch({
    type: FETCH_CART_ITEMS,
    payload: cartItems,
  })
}

// Function to remove cart item
export const removeCartItem = (id: string) => (dispatch: any) => {
  console.log(id)
  // Send the id to the reducer to remove product
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  })
}
