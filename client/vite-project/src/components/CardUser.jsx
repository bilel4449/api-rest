import { Button } from 'bootstrap';
import React from 'react'
import Card from 'react-bootstrap/Card';
const CardUser = ({user}) => {
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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardUser