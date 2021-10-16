import { SET_CHATTING, UNSET_CHATTING } from '../actions/types';

const initialState = {
  connectedUsers: [],
  chats: [],
  isChatting: false
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHATTING:
      return {
        ...state,
        isChatting: true
      };
    case UNSET_CHATTING:
      return {
        ...state,
        isChatting: false
      };
    default:
      return state;
  }
};

export default chatReducer;
