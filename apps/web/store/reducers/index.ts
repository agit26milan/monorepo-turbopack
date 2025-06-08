
import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./userReducer";
import ToastReducer from "./toastReducer";

const appReducers = combineReducers({
  user: UserReducer,
  toast: ToastReducer
});

export default appReducers;
