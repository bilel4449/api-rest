import React from 'react'
import { Link, useParams} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getUser, getUsers } from '../redux/actions';


const Info = ({items}) => {
  const { _id } = useParams();
  const item = items.find((el) => el._id === _id);

  const dispatch=useDispatch();

  
   dispatch(getUser());
    
  
  
  return (
    <div>
      <p>{item.fullName}</p>
      <p>{item.email}</p>
      <p> {item.phone}</p>
      <p> {item.age}</p>
      <Link to="/">
       <button>retour</button>
       </Link>
         {/* <Card style={{ width: '18rem' }}>
     
     <Card.Body>
      
       <Card.Title>{user.fullName}</Card.Title>
       <Card.Text>
         {user.email}
       </Card.Text>
       <Card.Text>
         {user.phone}
       </Card.Text>
       <Card.Text>
         {user.age}
       </Card.Text>
       <Link to="/">
       <button>retour</button>
       </Link>
       </Card.Body>
    </Card> */}
    </div>
  )
}

export default Info