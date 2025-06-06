import { useRouter } from "next/navigation";
import {initializeApp} from 'firebase/app'
const useLogin = () => {
  const router = useRouter();

  const goToRegisterPage = () => {
    router.push("register");
  };

  const onLoginUser = async () => {
    try {
      // const response = await firebase().
    }catch(e) {

    }
  }

  return {
    goToRegisterPage,
  };
};

export default useLogin;
