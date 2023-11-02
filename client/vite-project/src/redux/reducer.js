import { GET_USERS } from "./actionsTypes";

const init={
    users:null,
    loading:true
};
const reducer =(state=init,{type,payload})=>{
    switch (type) {
        case GET_USERS:
            
            return{
                ...state,
                users:payload,
                loading:false,
            };
    
        default:
            return state;
    }
};
export default reducer;