import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { addcart, getProductDeatils, productReview } from '../Services/AllAPI';
import { baseURL } from '../Services/baseURL';

function DeatileProduct() {
    const [review, setReview] = useState('')

    const [product, setProduct] = useState({})
    const [user, setUser] = useState({})
    const { id } = useParams()
    // console.log(id);
    const ProductDeatils = async () => {
        const response = await getProductDeatils(id)
        // console.log(response);
        setProduct(response.data)
    }

    const handleCart = async () => {
        const token = sessionStorage.getItem('token')
        const userid = sessionStorage.getItem('user')
        const user = JSON.parse(userid)?._id

        const reqHeader = {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
        }
        const reqbody = {
            id,
            count: 1
        }
        const response = await addcart(user, reqbody, reqHeader)
        console.log(response);


        if (response.status === 401) {
            alert("Authorization failed please login")
        }
        else if (response.status === 200) {
            alert("added")
        }

    }

    useEffect(() => {
        const userDeatils = sessionStorage.getItem('user')
        const user = JSON.parse(userDeatils)
        setUser(user)
        ProductDeatils()
    }, [id])

    // console.log(user);

    const handleReview = async (e) => {
        e.preventDefault()
        const reqbody = {
            productId: id,
            review
        }
        const token = sessionStorage.getItem('token')
        if(!token){
            alert('Plaese login')
            setReview('')
            return
        }

        const reqHeader = {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
        }

        const response = await productReview(reqbody, reqHeader)

        if (response.status == 200) {
            alert('review added')
            setReview('')
            ProductDeatils()
        }

    }




    return (
        <div>
            <Container className="my-4">
                <Row className="gy-4">
                    {/* Product Image and Buttons */}
                    <Col xs={12} md={6} lg={4}>
                        <Card>
                            <Card.Img variant="top" src={`${baseURL}/uploads/${product?.productImage}`} alt="Product Image"
                                style={{ height: '400px', width: '100%' }}
                            />
                            <Card.Body>
                                <Card.Text className="d-flex flex-column flex-sm-row justify-content-between">
                                    <Button
                                        variant="primary"
                                        className="d-flex align-items-center mb-2 mb-sm-0"
                                        style={{ gap: '0.5rem' }}
                                        onClick={handleCart}
                                    >
                                        <i
                                            className="fa-solid fa-cart-shopping fa-lg"
                                            style={{ color: '#FFF' }}
                                        />

                                        <Link style={{ textDecoration: 'none', color: 'white' }}> Add To Cart</Link>

                                    </Button>
                                    <Button variant="success">
                                        <Link
                                            to={`/buynow/${id}`}
                                            style={{ textDecoration: 'none', color: 'white' }}
                                        >
                                            Buy Now
                                        </Link>
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Product Details and Feedback */}
                    <Col xs={12} md={6} lg={8}>
                        <h4>{product?.productname}</h4>
                        <h6>₹{product?.price}</h6>
                        <h3>Product Details</h3>
                        <p>
                            {product?.aboutProduct}
                        </p>
                        <hr />

                        <h3>We Value Your Feedback</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Your Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="form-control"
                                    placeholder="Write your feedback here..."
                                    onChange={(e) => setReview(e.target.value)}
                                    value={review}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                }}
                                onClick={(e) => handleReview(e)}
                            >
                                Submit Feedback
                            </button>
                        </form>
                        <hr />

                        <h3 className="fs-5">Reviews</h3>
                        <div
                            style={{
                                maxHeight: '300px',
                                overflowY: 'auto',
                                border: '1px solid #ddd',
                                padding: '10px',
                                borderRadius: '5px',
                                backgroundColor: '#f9f9f9',
                            }}
                        >
                            {product?.reviews?.slice().reverse().map((r, index) => (
                                <div key={index} className="mb-3">
                                    <p className="fw-bold">
                                        <span className="fst-italic" style={{ color: '#909090' }}>{r.username}{r.secondname}</span>
                                    </p>
                                    <p>{r.review}</p>
                                    <hr />
                                </div>
                            ))}
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DeatileProduct;
