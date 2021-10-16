import { SET_CHATTING, UNSET_CHATTING } from './types';

// Function to enable the chat mode
export const enableChatMode = () => (dispatch) => {
  dispatch({
    type: SET_CHATTING
  });
};

// Function to disable the chat mode
export const disabledChatMode = () => (dispatch) => {
  dispatch({
    type: UNSET_CHATTING
  });
};
