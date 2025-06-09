import api from "@/apis/api";
import { API_PATH } from "@/apis/path";
import { auth } from "@/lib/Firebase";
import { setErrorAction } from "@/store/actions/toastAction";
import { useAppDispatch } from "@/store/store";
import { AxiosError } from "axios";
import { signInWithCustomToken } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
const useRegister = () => {
  const navigation = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onRegisterUser = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
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
      const signData = await signInWithCustomToken(
        auth,
        response.data.data.token
      );
      const token = await signData.user.getIdToken();
      document.cookie = `token=${token}`;
      setIsLoading(false);
      navigation.replace("/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setErrorAction(error.response?.data.data?.message));
        setIsLoading(false);
      }
    }
  };

  const isDisableBtn = () => {
    return email.length === 0 || password.length === 0 || isLoading;
  };

  const togglePass = () => {
    setShowPassword((prevState) => !prevState);
  };

  return {
    onChangeEmail,
    onChangePassword,
    onRegisterUser,
    isDisableBtn,
    isLoading,
    togglePass,
    showPassword,
  };
};

export default useRegister;
