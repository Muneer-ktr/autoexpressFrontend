import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container,Row } from 'react-bootstrap';
import EditModal from './EditModal';
import { deleteProduct, getDealerProducts } from '../Services/AllAPI';
import { baseURL } from '../Services/baseURL';

function EditProduct() {
  const [products, setProducts] = useState([]);
  // const [smShow, setSmShow] = useState(false);


  const getProducts = async () => {
    const token = sessionStorage.getItem('token');

    const reqHeader = {
      "Authorization": `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
    const response = await getDealerProducts(reqHeader);
    setProducts(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async(id)=>{
    const token = sessionStorage.getItem('token')

    const reqHeader = {
           "Authorization": `Bearer ${token}`,
           'Content-Type': 'application/json',
         };
         const response = await deleteProduct(id,reqHeader)
         console.log(response);
         if(response.status === 200){
          getProducts()
         }
  }


  return (
    <Container className="my-4">
      <Row>
        {products.length > 0
          ? products.map((product, index) => (
              <Col xs={12} sm={8} md={6} lg={4} key={index} className='mb-3'>
                <Card className="shadow-lg h-100">
                  <Card.Img
                    variant="top"
                    src={`${baseURL}/uploads/${product.productImage}`}
                    alt="Product"
                    style={{ width: '100%', height: '300px' }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="mb-2">{product.productname}</Card.Title>
                    <Card.Text className="text-muted mb-3">
                      {product.aboutProduct.slice(0,150)}...
                    </Card.Text>
                    <h5 className="mb-4">₹{product.price}</h5>
                    <div className="d-flex justify-content-between">
                      <Button variant="danger" className="px-4" onClick={()=>handleDelete(product._id)}>
                        Delete
                      </Button>
                      <EditModal product ={product}/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : 'Nothing to display'}
      </Row>

      {/* <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure????</Modal.Body>
        <Button variant="danger" className="px-4" onClick={()=>handleDelete(product._id)}>
          Delete
         </Button>
      </Modal> */}
    </Container>
  );
}

export default EditProduct;
