import React from 'react'
import { Link, useParams} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/actions';


const Info = ({items}) => {
  const { _id } = useParams();
  const item = items.find((el) => el._id === _id);

  const dispatch=useDispatch();

  
   dispatch(getUser);
    
  
  
  return (
    <div>
      <p>{item.fullName}</p>
      <p>{item.email}</p>
      <p> {item.phone}</p>
      <p> {item.age}</p>
      <Link to="/">
       <button>retour</button>
       </Link>
     
    </div>
  )
}

export default Info