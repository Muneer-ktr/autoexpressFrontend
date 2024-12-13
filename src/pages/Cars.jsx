import React, { useEffect, useState } from 'react';
import { Card, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProductCategory } from '../Services/AllAPI';
import { baseURL } from '../Services/baseURL';

function Cars({category}) {
  // console.log(category);
  
  const [products,setProducts] = useState([])

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
   const getProduct = async()=>{
     const response = await getProductCategory(category)
    //  console.log(response);
     
     setProducts(response.data)
     
   }
  useEffect(()=>{
    getProduct()
  },[category])


  return (
    <Container>
      <Form className="d-flex mb-3 mt-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <FormControl
          type="search"
          placeholder="Search for Parts"
          className="me-2"
          value={searchTerm}
          onChange={handleSearch}
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>

      <Row className="g-3 mb-3">
        {products.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top"
              style={{width:'100%', height:'300px'}}
              src={`${baseURL}/uploads/${item.productImage}`} />
              <Card.Body>
                <Card.Title>
                  <Link
                    to={ `/deatileproduct/${item._id}`}
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    {item.productname}
                  </Link>
                </Card.Title>
                <Card.Text>
                  <h6>{item.price}</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cars;
