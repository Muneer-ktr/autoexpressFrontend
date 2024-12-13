import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './admin.css';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const variant = 'Dark';

  // State to track hover effect
  const [hoveredCard, setHoveredCard] = useState(null);

  // Inline styles for cards
  const baseCardStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const hoverCardStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
  };

  const cards = [
    {
      title: 'Manage Users',
      link: '/admin/usertable',
      imgSrc: 'https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg',
    },
    {
      title: 'Manage Dealer',
      link: '/admin/dealertable',
      imgSrc: 'https://www.shutterstock.com/image-vector/phone-hand-entering-right-correct-260nw-2229319851.jpg',
    },
    {
      title: 'View Products',
      link: '/admin/productview',
      imgSrc: 'https://media.istockphoto.com/id/1304020328/vector/happy-woman-holding-huge-tourists-binocular.jpg?s=612x612&w=0&k=20&c=095ojLDyYGQTDKXaCK24Yhk3I3LXdV8hPwlggSsTyGY=',
    },
    {
      title: 'Track Orders',
      link: '/admin/trackorder',
      imgSrc: 'https://as1.ftcdn.net/v2/jpg/03/09/42/38/1000_F_309423827_ilsrHDqyX8PFdfDMDI5TiF2QIqthuvjT.jpg',
    },
    {
      title: 'Feedback',
      link: '/admin/feedback',
      imgSrc: 'https://static.vecteezy.com/system/resources/previews/009/216/246/non_2x/feedback-review-cartoon-icon-illustration-people-business-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg',
    },
    {
      title: 'Total Earnings',
      link: '/admin/totalearnings',
      imgSrc: 'https://img.freepik.com/premium-vector/family-couple-saving-money-concept-illustration_295036-292.jpg',
    },
  ];

  return (
    <div className="container">
      <div className="row mt-2 mb-3 gx-4 gy-4">
        {cards.map((card, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <Card
              bg={variant.toLowerCase()}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              className="h-100"
              style={
                hoveredCard === index
                  ? { ...baseCardStyle, ...hoverCardStyle }
                  : baseCardStyle
              }
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card.Header>
                <Link to={card.link} style={{ textDecoration: 'none', color: 'white' }}>
                  {card.title}
                </Link>
              </Card.Header>
              <Card.Body>
                <Card.Title>00</Card.Title>
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  style={{
                    borderRadius: '50%',
                    width: '100%',
                    maxWidth: '200px',
                    height: 'auto',
                  }}
                />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
