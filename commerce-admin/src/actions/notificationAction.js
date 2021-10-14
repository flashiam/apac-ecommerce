import { GET_NOTIFICATION } from './types';

// Function to get chat request notification
export const getChatRequest = (socket) => (dispatch) => {
  socket.on('connect', () => console.log('connected to server'));
  socket.on('to-admin', (res) => console.log(res));
  dispatch({
    type: GET_NOTIFICATION
  });
};
