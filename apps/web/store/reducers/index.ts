
import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./userReducer";
import ErrorReducer from "./errorReducer";

const appReducers = combineReducers({
  user: UserReducer,
  error: ErrorReducer
});

export default appReducers;
