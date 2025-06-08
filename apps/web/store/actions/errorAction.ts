import { AppDispatch } from "../store"
import { RESET_ERROR_GLOBAL, SET_ERROR_GLOBAL } from "../types"

export const setErrorAction = (message: string) => {
    return (dispatch:AppDispatch)  => {
        dispatch({type: SET_ERROR_GLOBAL, payload: {message}})
    }
}

export const resetErrorAction = () => {
    return (dispatch:AppDispatch)  => {
        dispatch({type: RESET_ERROR_GLOBAL})
    }
}