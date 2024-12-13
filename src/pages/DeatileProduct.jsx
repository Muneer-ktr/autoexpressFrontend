import React from 'react';
import parts from '../assets/product-jpeg.jpeg';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function DeatileProduct() {
    const {id} = useParams()
    console.log(id);
    
    return (
        <div>
            <Container className="my-4">
                <Row className="gy-4">
                    {/* Product Image and Buttons */}
                    <Col xs={12} md={6} lg={4}>
                        <Card>
                            <Card.Img variant="top" src={parts} alt="Product Image" />
                            <Card.Body>
                                <Card.Text className="d-flex flex-column flex-sm-row justify-content-between">
                                    <Button
                                        variant="primary"
                                        className="d-flex align-items-center mb-2 mb-sm-0"
                                        style={{ gap: '0.5rem' }}
                                    >
                                        <i
                                            className="fa-solid fa-cart-shopping fa-lg"
                                            style={{ color: '#FFF' }}
                                        />
                                        Add To Cart
                                    </Button>
                                    <Button variant="success">
                                        <Link
                                            to="/buynow"
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
                        <h4>Honda City Radiator</h4>
                        <h6>₹5665</h6>
                        <h3>Product Details</h3>
                        <p>
                            The Honda City radiator is a crucial component of the vehicle's cooling system,
                            designed to regulate engine temperatures and ensure efficient performance. 
                            Typically made from high-quality aluminum or copper with plastic tanks, the radiator's
                            lightweight yet durable construction promotes effective heat dissipation. It features a 
                            core with thin tubes and fins that maximize the surface area for cooling, allowing engine 
                            heat to transfer to the surrounding air. The radiator is equipped with an inlet and outlet 
                            for coolant flow, along with a pressure-regulated radiator cap to maintain consistent coolant circulation. 
                            Electric cooling fans are often integrated to provide additional airflow, especially in stationary 
                            or low-speed conditions. Designed for reliability and longevity, the Honda City radiator supports 
                            the engine's performance by preventing overheating and maintaining optimal operating temperatures. 
                            Regular maintenance, such as coolant flushes and inspections for leaks or corrosion, ensures the radiator's 
                            efficiency and helps prolong the life of the engine.
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
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                }}
                            >
                                Submit Feedback
                            </button>
                        </form>
                        <hr />

                        <h3>Reviews</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur maxime commodi
                            deleniti! Dolorem ipsa, excepturi laborum nulla, tempore magnam placeat inventore eum
                            veritatis similique voluptas consequuntur officiis commodi aliquid ipsum.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DeatileProduct;
