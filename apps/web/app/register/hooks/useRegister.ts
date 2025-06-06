import api from "@/apis/api";
import { API_PATH } from "@/apis/path";
import { SAVE_DATA_USER } from "@/store/types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
const useRegister = () => {
  const navigation = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
const dispatch = useDispatch();
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onRegisterUser = async () => {
    try {
      const payload = {
        email,
        password,
      };
      const response = await api({
        method: "POST",
        data: payload,
        url: API_PATH.REGISTER,
      });
      document.cookie = `token=${response.data.idToken}`;
      console.log({response},'reg response')
    //   dispatch({type: SAVE_DATA_USER, payload: response.data});
      navigation.replace("/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data?.data?.message);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 1000);
      }
    }
  };

  return {
    onChangeEmail,
    onChangePassword,
    onRegisterUser,
    isError,
    errorMessage,
  };
};

export default useRegister;
