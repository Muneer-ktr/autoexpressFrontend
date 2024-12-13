import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Grey_and_Black_Car_Rental_Service_Logo-removebg-preview.png';

function AdminNav() {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        data-bs-theme="light"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img id="img-size" src={logo} alt="logo" style={{ maxWidth: '150px', height: 'auto' }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/admin"
                  style={{ textDecoration: 'none', color: 'black' }}
                  onMouseOver={(e) => (e.target.style.color = '#007bff')}
                  onMouseOut={(e) => (e.target.style.color = 'black')}
                >
                  Home
                </Link>
              </Nav.Link>
            </Nav>
            <Button className="btn btn-dark">Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AdminNav;
