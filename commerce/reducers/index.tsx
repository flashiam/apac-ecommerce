import { combineReducers } from "redux";

import firstReducer from "./FirstReducer";
export default combineReducers({
    first:firstReducer
})