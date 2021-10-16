import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import notificationReducer from './notificationReducer';
import currentUserReducer from './cur_userReducer';

export default combineReducers({
  chat: chatReducer,
  notification: notificationReducer,
  currentUser:currentUserReducer
});
