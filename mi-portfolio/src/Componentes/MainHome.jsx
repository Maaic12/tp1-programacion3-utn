import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MainHome = ({nombre,apodo,edad,pais,ciudad,email,lenguajes}) => {
  return (
    <div>
      <Card style={{ width: '18rem', textAlign: 'left' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {apodo} <br />
          {edad} <br />
          {pais} <br />
          {ciudad} <br />
          {email} <br />
          {lenguajes.map((lenguaje, index) => (
            <li key={index}>{lenguaje}</li>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MainHome
