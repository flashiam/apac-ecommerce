import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({
  chat: chatReducer,
  notification: notificationReducer
});
