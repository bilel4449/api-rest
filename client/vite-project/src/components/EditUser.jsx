import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editUser, getUsers } from '../redux/actions';
const EditUser = ({user}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const dispatch=useDispatch()
    const [fullName, setFullName] = useState(user.fullName)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [age, setAge] = useState(user.age)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const editedUser={
         _id:user._id,
         fullName,
         email,
         phone,
         age,
        }
        dispatch(editUser(editedUser));
        dispatch(getUsers())
        handleClose()
    }
  return (
    
        <div>
             <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <FormControl placeholder='name' value={fullName} onChange={(e)=>setFullName(e.target.value)}></FormControl>
                <FormControl placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></FormControl>
                <FormControl placeholder='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}></FormControl>
                <FormControl placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)}></FormControl>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Comfirm
          </Button>
        </Modal.Footer>
      </Modal>
        </div>

  )
}

export default EditUser