import axios from "axios"
import { GET_USERS } from "./actionsTypes";

export const getUsers=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/get");
       
        dispatch({
            type:GET_USERS,
            payload:res.data,
            
        });
    } catch (error) {
        alert("get error");
    }
    
}

