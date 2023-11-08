import React from 'react'
import Card from 'react-bootstrap/Card';

const info = () => {
  
  
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
       </Card.Body>
    </Card>
    </div>
  )
}

export default info