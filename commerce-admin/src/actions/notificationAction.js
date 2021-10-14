import { GET_NOTIFICATION } from './types';

// Function to get chat request notification
export const getChatRequest = (socket) => (dispatch) => {
  socket.on('to-admin', (res) => {
    dispatch({
      type: GET_NOTIFICATION,
      payload: {
        notification: res,
        type: 'chat-request'
      }
    });
  });
};
