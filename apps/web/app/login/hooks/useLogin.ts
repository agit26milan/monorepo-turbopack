"use client"
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import {signInWithEmailAndPassword} from 'firebase/auth'
import React from "react";
import {auth} from "@/lib/Firebase";
const useLogin = () => {
  const router = useRouter();

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [isError, setIsError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const isDisableLoginButton = () => {
    return email?.length === 0 || password?.length === 0;
  }

  const onLoginUser = async () => {
    setIsError(false)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      const token = await response.user.getIdToken()
      console.log({response, token},'sasa')
      document.cookie = `token=${token}`
      router.replace('/dashboard')
    }catch(error) {
      if(error instanceof FirebaseError) {
        setIsError(true)
        setErrorMessage(error.message)
        setTimeout(() => {
          setIsError(false)
        }, 1000)
      }
    }
  }

  return {
    onChangeEmail,
    onChangePassword,
    isDisableLoginButton,
    onLoginUser,
    isError,
    errorMessage
  };
};

export default useLogin;
