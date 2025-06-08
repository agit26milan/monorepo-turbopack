"use client";
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "@/lib/Firebase";
import { useAppDispatch } from "@/store/store";
import { setErrorAction } from "@/store/actions/errorAction";
const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isDisableLoginButton = () => {
    return email?.length === 0 || password?.length === 0 || isLoading;
  };

  const onLoginUser = async () => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const token = await response.user.getIdToken();
      console.log({ response, token }, "sasa");
      document.cookie = `token=${token}`;
      router.replace("/dashboard");
      setIsLoading(false);
    } catch (error) {
      if (error instanceof FirebaseError) {
        dispatch(setErrorAction(error.message));
        setIsLoading(false);
      }
    }
  };

  return {
    onChangeEmail,
    onChangePassword,
    isDisableLoginButton,
    onLoginUser,
    isLoading,
  };
};

export default useLogin;
