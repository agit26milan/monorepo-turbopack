import { ReduxActionProps } from "../interfaces";
import { SAVE_DATA_USER } from "../types";


const initialState = {
  user: {},
};


const UserReducer = (state = initialState, action:ReduxActionProps<string>) => {
  switch (action.type) {
    case SAVE_DATA_USER:
        return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
