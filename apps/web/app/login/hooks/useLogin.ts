"use client";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { FormEvent } from "react";
import { auth } from "@/lib/Firebase";
import { useAppDispatch } from "@/store/store";
import { setErrorAction } from "@/store/actions/toastAction";
const useLogin = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isDisableLoginButton = () => {
    return email?.length === 0 || password?.length === 0 || isLoading;
  };

  const onLoginUser = async (event:FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const token = await response.user.getIdToken();
      document.cookie = `token=${token}`;
      location.reload()
      setIsLoading(false);
    } catch (error) {
      if (error instanceof FirebaseError) {
        dispatch(setErrorAction(error.message));
        setIsLoading(false);
      }
    }
  };

  const togglePass = () => {
    setShowPassword((prevState) => !prevState)
  }

  return {
    onChangeEmail,
    onChangePassword,
    isDisableLoginButton,
    onLoginUser,
    isLoading,
    showPassword,
    togglePass
  };
};

export default useLogin;
