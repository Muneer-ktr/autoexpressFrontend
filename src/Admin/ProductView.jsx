import React from 'react'
import { Button, Card } from 'react-bootstrap'

function ProductView() {
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-illustration/car-parts-auto-spare-isolated-600nw-2283939101.jpg" />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <h3>price :</h3>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductView