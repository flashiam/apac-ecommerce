import { CustomerState } from 'data1'
// import { Action } from 'redux'
import {
  ADD_ADDRESS,
  ADD_CUSTOMER,
  FETCH_CUSTOMER,
  REMOVE_CUSTOMER,
} from '../actions/types'

const initialState: CustomerState = {
  customer: null,
  loggedIn: false,
  savedAddresses: [],
}

const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      localStorage.setItem('customer', JSON.stringify(action.payload))
      return {
        ...state,
        customer: action.payload,
        loggedIn: true,
      }
    case FETCH_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
        loggedIn: true,
      }
    case REMOVE_CUSTOMER:
      localStorage.removeItem('customer')
      return {
        ...state,
        customer: null,
        loggedIn: false,
      }
    case ADD_ADDRESS:
      return {
        ...state,
        savedAddresses: [...state.savedAddresses, action.payload],
      }
    default:
      return state
  }
}

export default customerReducer
