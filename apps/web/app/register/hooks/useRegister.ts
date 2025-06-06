import api from "@/apis/api";
import { API_PATH } from "@/apis/path";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React from "react";
const useRegister = () => {
  const navigation = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onRegisterUser = async () => {
    try {
      setIsLoading(true);
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
      console.log({ response }, "reg response");
      //   dispatch({type: SAVE_DATA_USER, payload: response.data});
      setIsLoading(false);
      navigation.replace("/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data?.data?.message);
        setIsError(true);
        setIsLoading(false);
        setTimeout(() => {
          setIsError(false);
        }, 1000);
      }
    }
  };

  const isDisableBtn = () => {
    return email.length === 0 || password.length === 0 || isLoading;
  };

  return {
    onChangeEmail,
    onChangePassword,
    onRegisterUser,
    isError,
    errorMessage,
    isDisableBtn,
    isLoading
  };
};

export default useRegister;
