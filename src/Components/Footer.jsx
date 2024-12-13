import React from 'react';
import logo from '../assets/Grey_and_Black_Car_Rental_Service_Logo-removebg-preview.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row my-4">
          {/* Logo and Tagline */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
            <div
              className="rounded-circle bg-white shadow d-flex align-items-center justify-content-center mx-auto mb-4"
              style={{ width: 150, height: 150 }}
            >
              <img src={logo} height={70} alt="Logo" loading="lazy" />
            </div>
            <p>
              The best way to travel across the road to success is in a vehicle
              that embodies the essence of success.
            </p>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Cars Section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Cars</h5>
            <ul className="list-unstyled">
              {['Body Parts', 'Engine Parts', 'Gear Box Parts', 'Shocks'].map((item, idx) => (
                <li className="mb-2" key={idx}>
                  <a href="#!" className="text-white"
                   style={{ textDecoration: 'none' }}>
                    <i className="fa-solid fa-screwdriver-wrench me-2"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Motorcycles Section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Motorcycles</h5>
            <ul className="list-unstyled">
              {['Body', 'Engine', 'Chain', 'Gearbox', 'Shocks', 'Contact'].map((item, idx) => (
                <li className="mb-2" key={idx}>
                  <a href="#!" className="text-white"
                   style={{ textDecoration: 'none' }}>
                    <i className="fa-solid fa-screwdriver-wrench me-2"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <p>
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Warsaw, 57 Street, Poland
                </p>
              </li>
              <li className="mb-2">
                <p>
                  <i className="fas fa-phone me-2"></i>
                  +01 234 567 89
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope me-2"></i>autoxpress2024@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright: 
        <a className="text-white ms-1" >
          <Link to={'/'}>AutoXpress</Link>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
