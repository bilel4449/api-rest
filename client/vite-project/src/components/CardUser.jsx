import React from 'react'
import Card from 'react-bootstrap/Card';
import { delUser, getUser, getUsers } from '../redux/actions';
import { useDispatch } from 'react-redux';
import EditUser from './EditUser';
import Button from 'react-bootstrap/esm/Button';

const CardUser = ({user}) => {
  console.log(user)
  const dispatch=useDispatch()
  const deleteOne=async()=>{
    await dispatch(delUser(user._id))
    
    dispatch(getUsers())
  }
  const getOne=async()=>{

   await dispatch(getUser(user._id))
  }
  return (
    <div>
        <Card style={{ width: '18rem' }}>
     
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
      <Button variant="danger" type='submit' onClick={deleteOne}>delete</Button>
      <EditUser user={user}/>
    <Button onClick={getOne}>Info</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardUser