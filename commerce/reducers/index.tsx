import { combineReducers } from 'redux'
import productReducer from './productReducer'
import chatReducer from './chatReducer'

export default combineReducers({
  product: productReducer,
  chat: chatReducer,
})
