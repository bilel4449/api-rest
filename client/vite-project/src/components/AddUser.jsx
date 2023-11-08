import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/actions'

const AddUser = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newUser={
        fullName,email,phone,age
    }
  dispatch(addUser(newUser))
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
            <label>fullName</label>
            <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Phone</label>
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <label>Age</label>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
            <button type='submit'>Confirm</button>
        </form>
    </div>
  )
}

export default AddUser