import { GET_NOTIFICATION } from '../actions/types';

const initialState = {
  notifications: [],
  loading: true
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
        loading: false
      };
    default:
      return state;
  }
};

export default notificationReducer;
