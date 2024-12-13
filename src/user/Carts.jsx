import React from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';

function Carts() {
  return (
    <div className="container mt-4">
      <Row>
        {/* Cart Items Section */}
        <Col xs={12} md={8}>
          {/* Making the table responsive */}
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Splender Gbox</td>
                  <td>
                    <img
                      src="https://5.imimg.com/data5/IM/FJ/AC/SELLER-27652367/super-splendor-gear-kit-500x500.jpg"
                      alt="Super Splendor Gear Kit"
                      className="img-fluid"
                      style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  </td>
                  <td>₹1500</td>
                  <td>
                    <Button variant="light" className="p-2">
                      <i
                        className="fa-solid fa-trash fa-2x"
                        style={{ color: '#ec0909' }}
                      ></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        {/* Cart Summary Section */}
        <Col xs={12} md={4} className="mt-4 mt-md-0">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Cart Summary</Card.Title>
              <Card.Text className="mt-3">
                <h5>
                  Total Products: <span>1</span>
                </h5>
                <h5>
                  Total Price: <span>₹1500</span>
                </h5>
              </Card.Text>
              <Button variant="primary" className="w-100 mt-3">
                Place Order
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Carts;
