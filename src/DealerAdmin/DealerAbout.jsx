import React from 'react';
import dealer from '../assets/dealer1.webp';
import { Col, Row } from 'react-bootstrap';

function DealerAbout() {
  return (
    <div className="container mt-5">
      <Row className="align-items-center">
        {/* Image Column */}
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
          <img 
            src={dealer} 
            alt="Dealer" 
            className="img-fluid rounded" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </Col>

        {/* Text Column */}
        <Col xs={12} md={6}>
          <h1 className="mb-4">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est architecto eaque deleniti 
            quod consectetur obcaecati voluptas animi! Non suscipit incidunt placeat vitae soluta 
            quia? Labore perferendis omnis consequatur dignissimos quidem.
          </p>
          <p>
            Voluptate, eos. Unde hic reprehenderit impedit, perspiciatis quis voluptate repellendus. 
            Aliquid nisi cupiditate repellat doloribus provident, neque similique est dolor sapiente, 
            perspiciatis nihil totam iure earum eveniet ad repellendus ipsa.
          </p>
          <p>
            Magnam debitis facere, fugiat vitae ipsa laboriosam sint laborum sunt pariatur harum quis 
            officiis similique eveniet voluptas incidunt deleniti delectus culpa perferendis tempora! 
            Vero ullam aperiam reprehenderit similique unde laboriosam.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default DealerAbout;
