import { combineReducers } from 'redux'
import productReducer from './productReducer'
import chatReducer from './chatReducer'
import customerReducer from './customerReducer'
import paymentReducer from './paymentReducer'

export default combineReducers({
  customers: customerReducer,
  product: productReducer,
  chat: chatReducer,
  payment: paymentReducer,
})
