import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteFromcart, getcartDetails } from '../Services/AllAPI';
import { baseURL } from '../Services/baseURL';

function Carts() {

  const [product,setProduct] = useState([])
  const getproduct = async()=>{

    const token = sessionStorage.getItem('token')
    const userid = sessionStorage.getItem('user')
    const user = JSON.parse(userid)?._id

    const reqHeader = {
      'Authorization': `Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const response = await getcartDetails(user,reqHeader)
    console.log(response);



    setProduct(response?.data?.products)
    
  }
  console.log(product);
  
  useEffect(()=>{
    getproduct()
  },[])

  const handleDelete = async(id)=>{
    const token = sessionStorage.getItem('token')

    const reqHeader = {
      'Authorization': `Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const response = await deleteFromcart(id,reqHeader)
    if(response.status === 200){
      getproduct()
    }

  }
  return (
    <div className="container mt-4">
      <Row>
        
            <Col xs={12} md={8}>

            <div className="table-responsive">
              <Table striped bordered hover>
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
          product?.map((item)=>(
                  <tr>
                    <td>0</td>
                    <td><Link to={`/deatileproduct/${item?.productId?._id}`}>{item?.productId?.productname}</Link></td>
                    <td>
                      <img
                        src={`${baseURL}/uploads/${item?.productId?.productImage}`}
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
                    <td>{item?.productId?.price}</td>
                    <td>{item?.count}</td>
                    <td>
                      <Button variant="light" className="p-2">
                        <i
                          className="fa-solid fa-trash fa-2x"
                          style={{ color: '#ec0909' }}
                          onClick={()=>handleDelete(item?.productId?._id)}
                        ></i>
                      </Button>
                    </td>
                  </tr>
                            ))
                          }
                  
                </tbody>
              </Table>
            </div>
          </Col>
        {/* Cart Items Section */}
       

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
                <Link to={'/buynow'} style={{ textDecoration: 'none', color: 'white' }}>Place Order</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Carts;
