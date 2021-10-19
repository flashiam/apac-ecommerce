import { CartProduct } from 'data1'
import {
  ADD_TO_CART,
  FETCH_CART_ITEMS,
  REMOVE_CART_ITEM,
  UPDATE_CART_QUANTITY,
} from './types'

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
  // Remove from localstorage also
  const savedItems: any = localStorage.getItem('cart-items')
  const cartItems = JSON.parse(savedItems)
  if (cartItems) {
    const remainItems = cartItems.filter((item: CartProduct) => item.id !== id)
    localStorage.setItem('cart-items', JSON.stringify(remainItems))
  }

  // Send the id to the reducer to remove product
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  })
}

// Function to update cart item price
export const updateCartQuantity =
  (id: string, quantity: number) => (dispatch: any) => {
    console.log(id, quantity)
    const item = { id, quantity }
    // console.log(item)
    dispatch({
      type: UPDATE_CART_QUANTITY,
      payload: item,
    })
  }
