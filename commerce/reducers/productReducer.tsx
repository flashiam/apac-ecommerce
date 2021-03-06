import {
  ADD_TO_CART,
  FETCH_CART_ITEMS,
  REMOVE_CART_ITEM,
  CALCULATE_CART_TOTAL,
  UPDATE_CART_QUANTITY,
  CLEAR_CART_ITEM,
} from 'actions/types'
import { ProductState } from 'data1'

const initialState: ProductState = {
  cartItems: [],
  totalCartPrice: 0,
  loading: true,
}

const first = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('Data found!!')
      localStorage.setItem(
        'cart-items',
        JSON.stringify([...state.cartItems, action.payload])
      )
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalCartPrice: state.totalCartPrice + action.payload.price,
        loading: false,
      }
    case FETCH_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload || [],

        loading: false,
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        loading: false,
      }
    case CALCULATE_CART_TOTAL:
      // console.log('calculating...')
      return {
        ...state,
        totalCartPrice: action.payload,
      }
    case UPDATE_CART_QUANTITY:
      // console.log(action.payload)
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        loading: false,
      }
    case CLEAR_CART_ITEM:
      localStorage.removeItem('cart-items')
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }
}

export default first
