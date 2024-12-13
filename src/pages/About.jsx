import React from 'react'
import about from '../assets/automob3.jpg'
import about1 from '../assets/aboutvid.mp4'
import { Col, Container, Row } from 'react-bootstrap'
import './about.css'

function About() {
  return (
    <div>
      <Container>
        <Row className='mt-3'>
          <Col xs={12} md={6} lg={6} className="text-center">
          <video src={about1} autoPlay loop muted style={{ width: '100%', height: 'auto' }}></video>
          </Col>
          <Col>
          <h1>About US</h1>
            <p>
            Welcome to <b>AutoXpress</b>, your trusted partner in high-quality automobile spare parts. We are dedicated to providing vehicle owners, repair shops, and automotive enthusiasts with a comprehensive range of spare parts to keep their vehicles running smoothly and efficiently.
            </p>
            <h1>Who We Are</h1>
            <p>
            Founded on a passion for automobiles and a commitment to excellence, <b>AutoXpress</b> has grown into a reliable supplier in the automotive industry. Our team comprises automotive experts and customer service professionals who understand your needs and are here to guide you every step of the way.
            </p>
          </Col>
        </Row>
        <Row >
  <Col  md={5}
    style={{
      border: '2px solid #ccc',
      borderRadius: '15px',
      backgroundColor: '#d9ead9',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}
  >
    <h1>What We Offer</h1>
    <p>At <b>AutoXpress</b>, we pride ourselves on offering:</p>
    <ul>
      <li>
        <strong>Wide Product Range:</strong> From engines and brake systems to body parts and accessories, we stock spare parts for all major car brands and models.
      </li>
      <li>
        <strong>Quality Assurance:</strong> We source products from trusted manufacturers and ensure every part meets rigorous quality and safety standards.
      </li>
      <li>
        <strong>Competitive Pricing:</strong> We believe in affordability without compromising on quality, making it easier for you to maintain your vehicle.
      </li>
      <li>
        <strong>Fast Delivery:</strong> With a well-organized logistics network, we ensure your orders reach you on time, every time.
      </li>
    </ul>
  </Col>
  <Col></Col>
  <Col  md={6}
    style={{
      border: '2px solid #ccc',
      borderRadius: '15px',
      backgroundColor: '#d9ead9',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}
  >
    <h1>Why Choose Us?</h1>
    <ul>
      <li><strong>Expertise:</strong> Our knowledgeable staff is here to help you find the perfect part for your vehicle.</li>
      <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority, and we work hard to exceed your expectations.</li>
      <li><strong>Innovation:</strong> We stay ahead of industry trends to bring you the latest and most effective automotive solutions.</li>
    </ul>
  </Col>
</Row>
<Row className="my-5">
  {/* Vision Section */}
  <Col
    md={5}
    style={{
      border: '2px solid #ccc',
      borderRadius: '15px',
      backgroundColor: '#d9ead9',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}
  >
    <h1>Our Vision</h1>
    <p>
      To revolutionize the automobile spare parts industry by setting a new standard for quality, 
      accessibility, and customer satisfaction. We aim to build lasting relationships with our 
      customers, suppliers, and partners worldwide.
    </p>
  </Col>
<Col></Col>
  {/* Mission Section */}
  <Col
    md={6}
    style={{
      border: '2px solid #ccc',
      borderRadius: '15px',
      backgroundColor: '#d9ead9',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}
  >
    <h1>Our Mission</h1>
    <p>
      Our mission is to empower vehicle owners and mechanics with reliable spare parts that enhance safety, 
      performance, and longevity. We strive to be the go-to source for all your automotive needs by combining 
      exceptional products with unmatched customer service.
    </p>
  </Col>
</Row>


      </Container>
    </div>
  )
}

export default About
