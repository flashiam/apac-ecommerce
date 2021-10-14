import { CURRENT_USER } from '../actions/types';

const initialState = {
  currentUserData: null,

};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
    console.log("Reducer-DATA",action.payload)
      return {
        ...state,
        currentUserData:action.payload
      };

    default:
      return state;
  }
};

export default currentUserReducer;
