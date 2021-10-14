import { ChatState } from '../data1'
import { io } from 'socket.io-client'
import { Action } from 'redux'

const initialState: ChatState = {
  socket: io('http://localhost:8000'),
}

const chatReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default chatReducer
