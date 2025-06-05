
import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./userReducer";

const appReducers = combineReducers({
  user: UserReducer,

});

export default appReducers;
