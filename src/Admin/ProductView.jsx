import React, { useEffect, useState } from 'react';
import {Card, Container, Row, Col } from 'react-bootstrap';
import { viewproductAdmin } from '../Services/AllAPI';
import { baseURL } from '../Services/baseURL';

function ProductView() {
  const [products, setProduct] = useState([]);

  const getProductDetails = async () => {
    const token = sessionStorage.getItem('token');

    const reqHeader = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const response = await viewproductAdmin(reqHeader);

    setProduct(response.data.products);
    console.log(response);
  };

  useEffect(() => {
    getProductDetails();
  }, []);
  console.log(products);

  return (
    <Container className="py-4">
      <Row className="g-4">
        {products?.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} key={product._id}>
            <Card style={{ width: '100%', height: '30rem', position: 'relative' }}>
              <Card.Img
                variant="top"
                src={`${baseURL}/uploads/${product?.productImage}`}
                style={{ height: '50%', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.productname}</Card.Title>
                <Card.Text style={{ flex: '1 0 auto' }}>
                  {product.aboutProduct.slice(0, 100)}...
                </Card.Text>
                <h3>Price: {product.price}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductView;
