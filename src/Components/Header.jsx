import React, { useEffect, useState } from 'react'
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../assets/Grey_and_Black_Car_Rental_Service_Logo-removebg-preview.png'
import './header.css'
import { Link } from 'react-router-dom'
import AdminNav from '../Admin/AdminNav'
import DealerNav from '../DealerAdmin/DealerNav'

function Header() {
  const [token, setToken] = useState('')
  const [user,setUser] = useState({})
  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
    const userDetails = sessionStorage.getItem('user')
    setUser(JSON.parse(userDetails))
  }, [])

  return (
    <div>

     { 
     user?.role === 'dealer' ? 
     <DealerNav/>
     
      : 
        user?.role === 'admin' ?
        <AdminNav/>
        :
        <Navbar  className="" id='back'
        bg="light"
        expand="lg"
        data-bs-theme="light"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        }}
        >
        <Navbar.Brand ><Link to={'/'}><img id='img-size' src={logo} alt="logo" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link ><Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}
              onMouseOver={(e) => (e.target.style.color = '#007bff')}
              onMouseOut={(e) => (e.target.style.color = 'black')}
            >Home</Link></Nav.Link>
            <Nav.Link ><Link to={'/about'} style={{ textDecoration: 'none', color: 'black' }}
              onMouseOver={(e) => (e.target.style.color = '#007bff')}
              onMouseOut={(e) => (e.target.style.color = 'black')}>About</Link></Nav.Link>


            <NavDropdown
              title={
                <span
                  style={{ color: 'black', transition: 'color 0.3s ease' }}
                  onMouseOver={(e) => (e.target.style.color = '#007bff')}
                  onMouseOut={(e) => (e.target.style.color = 'black')}
                >
                  Category
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link
                  to={'/cars'}
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#007bff')}
                  onMouseOut={(e) => (e.target.style.color = 'black')}
                >
                  Cars
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to={'/bikes'}
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#007bff')}
                  onMouseOut={(e) => (e.target.style.color = 'black')}
                >
                  Motorcycle
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link ><Link to={'/contact'} style={{ textDecoration: 'none', color: 'black' }}
              onMouseOver={(e) => (e.target.style.color = '#007bff')}
              onMouseOut={(e) => (e.target.style.color = 'black')}>Contact</Link></Nav.Link>
          </Nav>


          {
            token &&
            <>


              <NavDropdown
                title={
                  <Button className="btn-dark rounded-circle p-2" style={{ border: 'none' }}>
                    <i className="fa-regular fa-user fa-lg text-white"></i>
                  </Button>
                }
                className="me-2"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    to="/userprofile"
                    style={{ textDecoration: 'none', color: 'black' }}
                    onMouseOver={(e) => (e.target.style.color = '#007bff')}
                    onMouseOut={(e) => (e.target.style.color = 'black')}
                  >
                    My Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/order"
                    style={{ textDecoration: 'none', color: 'black' }}
                    onMouseOver={(e) => (e.target.style.color = '#007bff')}
                    onMouseOut={(e) => (e.target.style.color = 'black')}
                  >
                    My Orders
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onMouseOver={(e) => (e.target.style.color = '#007bff')}
                  onMouseOut={(e) => (e.target.style.color = 'black')}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              <Button className="btn btn-dark d-flex align-items-center me-3" id="left">
                <Link
                  to={'/cart'}
                  style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}
                >
                  <i className="fa-solid fa-cart-shopping fa-lg me-2" style={{ color: '#ffffff' }}></i>
                  <span>Cart</span>
                  <h6 className="ms-2 mb-0" style={{ fontSize: '0.9rem' }}>0</h6>
                </Link>
              </Button>
            </>
          }
          {
            !token &&

            <>
             <NavDropdown
                title={<span style={{ color: "white" }}>SIGN UP</span>}
                className='btn btn-dark me-5'
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item ><Link to={'/userlogin'} style={{ textDecoration: 'none', color: 'black', }}
                  onMouseOver={(e) => (e.target.style.color = '#007bff')}
                  onMouseOut={(e) => (e.target.style.color = 'black')}>Customer</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to={'/dealerlogin'} style={{ textDecoration: 'none', color: 'black' }}
                  onMouseOver={(e) => (e.target.style.color = '#007bff')}
                  onMouseOut={(e) => (e.target.style.color = 'black')}>Dealer</Link></NavDropdown.Item>
              </NavDropdown>
              
              <Button className='btn btn-dark me-3' id='left'><Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>LOGIN</Link></Button>
            </>
          }
        </Navbar.Collapse>

      </Navbar>
      }
    </div>
  )
}

export default Header

