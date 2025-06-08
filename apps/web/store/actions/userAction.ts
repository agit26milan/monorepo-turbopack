import api from "@/apis/api";
import { AppDispatch } from "../store";
import { API_PATH } from "@/apis/path";
import { SAVE_DATA_USER } from "../types";
import { AxiosError } from "axios";

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
