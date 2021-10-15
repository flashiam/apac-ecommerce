import { Dispatch } from 'redux'
import { ADD_CUSTOMER, FETCH_CUSTOMER, REMOVE_CUSTOMER } from './types'
import { Customer } from '../data1'

// Function to set the customer's details
export const addCustomer = (custData: Customer) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_CUSTOMER,
    payload: custData,
  })
}

// Function to fetch the customer's credentials as soon as page loads
export const fetchCustomer = () => (dispatch: Dispatch) => {
  // Get the registered user from ls
  const savedUser: any = localStorage.getItem('customer')
  const user = JSON.parse(savedUser)
  if (user) {
    dispatch({
      type: FETCH_CUSTOMER,
      payload: user,
    })
  }
}

// Function to sign out the user
export const removeCustomer = () => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_CUSTOMER,
  })
}
