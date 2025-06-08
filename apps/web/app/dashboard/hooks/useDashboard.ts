import { getUserDetailAction } from "@/store/actions/userAction"
import { useAppDispatch } from "@/store/store"


const useDashboard = () => {
    const dispatch = useAppDispatch()
    const getDetailUser = async () => {
        dispatch(getUserDetailAction())
    }

    return {
        getDetailUser
    }
}


export default useDashboard