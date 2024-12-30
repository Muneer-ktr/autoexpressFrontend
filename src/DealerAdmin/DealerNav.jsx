import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Grey_and_Black_Car_Rental_Service_Logo-removebg-preview.png';
import { LoginContext } from '../Context/LoginContext';

function DealerNav() {
      const {setLoginresponse} = useContext(LoginContext)
  
    
  const navigate = useNavigate()

  const handleLogout=()=>{
    sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')
      navigate('/login')
      setLoginresponse('logout')
    
  }
  return (
    <div>
      <Navbar className="bg-body-tertiary"
       bg="light"
       expand="lg"
       data-bs-theme="light"
       style={{
         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
       }}
      >
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand>
            <Link to="/">
              <img
                id="img-size"
                src={logo}
                alt="logo"
                style={{ maxWidth: '150px', height: 'auto' }}
              />
            </Link>
          </Navbar.Brand>

       

          {/* Toggle Button for Responsive Navbar */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible Navbar */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* About Link */}
              <Nav.Link as={Link} to="/" className="text-dark">
                HOME
              </Nav.Link>

              {/* Add Product Link */}
              <Nav.Link as={Link} to="/dealeradmin/productadd" className="text-dark">
                Add Product
              </Nav.Link>

              {/* Edit Product Link */}
              <Nav.Link as={Link} to="/dealeradmin/editproduct" className="text-dark">
                Edit Product
              </Nav.Link>
            </Nav>

            {/* Logout Button */}
            <Button className="btn btn-dark"
            onClick={handleLogout}
            >Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default DealerNav;
