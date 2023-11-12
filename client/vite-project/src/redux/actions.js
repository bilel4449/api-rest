import axios from "axios"
import { ADD_USERS, DELETE_USERS, EDIT_USERS, GET_USERS, INFO} from "./actionsTypes";
import EditUser from "../components/EditUser";
 axios.defaults.baseURL=`http://localhost:4000`

 
export const getUsers=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/get");

       console.log(res)
        dispatch({
            type:GET_USERS,
            payload:res.data,
            
        });
    } catch (error) {
        alert("get error");
    }
    
}
export const addUser=(newUser)=>async(dispatch)=>{
    try {
        const{data}=await axios.post("/add",newUser);
        dispatch({
            type:ADD_USERS,
            payload:data,
        })
    } catch (error) {
       alert("post error") 
    }
}
export const delUser=(_id)=>async(dispatch)=>{
    try {
    const res=await axios.delete(`/delete/${_id}`);
    dispatch({
        type:DELETE_USERS,
        payload:res,
    })
        
    } catch (error) {
        alert("delete error")
    }
};
export const editUser=(editedUser)=>async(dispatch)=>{
    try {
        const res=await axios.put(`/put/${editedUser._id}`,editedUser);
        dispatch({
            type:EDIT_USERS,
            payload:res.data,
        })
    } catch (error) {
        console.log("edit error")
    }

}
export const getUser=(_id)=>async(dispatch)=>{
    try {
        const res=await axios.get(`/get-id/${_id}`);
        dispatch({
            type:INFO,
            payload:res.data,
        })
    } catch (error) {
        console.log("get user error")
    }
}





