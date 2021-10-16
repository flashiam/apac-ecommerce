import { ADD_TO_CART, FETCH_CART_ITEMS, REMOVE_CART_ITEM } from 'actions/types'
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
    default:
      return state
  }
}

export default first
