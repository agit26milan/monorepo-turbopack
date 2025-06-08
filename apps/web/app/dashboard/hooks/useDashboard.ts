import { getUserDetailAction, IUserData, updateUserAction } from "@/store/actions/userAction";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { FormEvent } from "react";

const useDashboard = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state?.user?.user);
  const getDetailUser = async () => {
    dispatch(getUserDetailAction());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const name = formData.get("name");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const payload:IUserData = {
        email,
        name,
        phone,
        address,

    }
    dispatch(updateUserAction(payload))
    
  };

  return {
    getDetailUser,
    user,
    handleSubmit,
  };
};

export default useDashboard;
