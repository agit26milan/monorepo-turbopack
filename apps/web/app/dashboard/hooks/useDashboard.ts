import api from "@/apis/api"
import { API_PATH } from "@/apis/path"
import { SAVE_DATA_USER } from "@/store/types"
import { AxiosError } from "axios"
import { useDispatch } from "react-redux"


const useDashboard = () => {
    const dispatch = useDispatch()
    const getDetailUser = async () => {
        try {
            const response = await api({method:'GET', url: API_PATH.DETAIL_USER})
            dispatch({type: SAVE_DATA_USER, payload: response.data?.data})
        }catch(error) {
            if(error instanceof AxiosError){
                console.log(error.message)
            }
        }
    }


    return {
        getDetailUser
    }
}


export default useDashboard