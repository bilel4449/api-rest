import { ADD_USERS, DELETE_USERS, EDIT_USERS, GET_USERS, INFO} from "./actionsTypes";

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
        case ADD_USERS:
            return{
                ...state,
                users:[...state.users,payload],
            };
            case DELETE_USERS:
                return{
                    ...state,
                    users:state.users.filter(el=>el._id!=payload)
                }
                case EDIT_USERS:
                    return{
                        ...state,
                        users:state.users.map((el)=>(el._id===payload._id?payload:el)),
                    };
                    case INFO:
                        return{
                            ...state,
                            users:state.users.find(el=>el._id===payload),
                        }
        default:
            return state;
    }
};
export default reducer;