import { ReduxActionProps } from "../interfaces";
import { RESET_ERROR_GLOBAL, SET_ERROR_GLOBAL, SET_SUCCESS_GLOBAL } from "../types";

export interface Error {
  type:string
  message:string
}
interface UserReduxProps {
  error: Error | null;
}

const initialState: UserReduxProps = {
  error: null,
};

const ErrorReducer = (
  state = initialState,
  action: ReduxActionProps<Error>
) => {
  switch (action.type) {
    case SET_ERROR_GLOBAL:
      return { ...state, error: {type: 'error', message: action.payload.message} };
    case RESET_ERROR_GLOBAL:
      return {...state, error: null}
    case SET_SUCCESS_GLOBAL:
      return {...state, error: {type: 'success', message: action.payload.message}}
    default:
      return state;
  }
};

export default ErrorReducer;
