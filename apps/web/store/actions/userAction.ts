import api from "@/apis/api";
import { AppDispatch } from "../store";
import { API_PATH } from "@/apis/path";
import { SAVE_DATA_USER, SET_ERROR_GLOBAL } from "../types";
import { AxiosError } from "axios";
import { setSuccessAction } from "./toastAction";

export interface IUserData {
  name: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  address: FormDataEntryValue | null;
}

export const getUserDetailAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await api({ method: "GET", url: API_PATH.DETAIL_USER });
      dispatch({ type: SAVE_DATA_USER, payload: response.data?.data });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.message);
      }
    }
  };
};

export const updateUserAction = (body: IUserData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await api({
        method: "PATCH",
        data: body,
        url: API_PATH.UPDATE_USER,
      });
      dispatch(setSuccessAction("Success update user"));

      if (response.data.isChangeEmail) {
        setTimeout(() => {
          location.reload();
        }, 1000);
        return;
      }
      dispatch(getUserDetailAction());
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch({ type: SET_ERROR_GLOBAL, payload: error.message });
      }
    }
  };
};
