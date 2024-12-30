import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { appReview } from '../Services/AllAPI'

function Contact() {

  const [appreviews,setAppreview] = useState({
    username:'',
    review:'',
    email:''
  })

      const handleAppReview = async (e) => {
          e.preventDefault()
          // const {username,review,email} = appReview
         
          const token = sessionStorage.getItem('token')
          if(!token){
            alert('plase login')
          }
  
          const reqHeader = {
              'Authorization': `Bearer ${token}`,
              "Content-Type": "application/json"
          }
  
          const response = await appReview(appreviews, reqHeader)
  console.log(response);
          if (response.status == 200) {
              alert('review added')
              setAppreview({ username:'',
                review:'',
                email:''
              })
  
          }  
      }
     
  return (
 <>
<Container>
  <Row className='mt-4 mb-3'>
    <Col>
      <h1>Contact Us</h1>
      <p>
        Have a question, concern, or just want to share your thoughts? We’d love to hear from you!
        Reach out to us via the details below or fill out the feedback form. Our team will get back
        to you as soon as possible.
      </p>
      <h3>Our Contact Details</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><strong>Address:</strong> 1234 Your Street, Your City, Your Country</li>
        <li><strong>Phone:</strong> 8129651515</li>
        <li><strong>Email:</strong> autoxpress2024@gmail.com</li>
        <li><strong>Working Hours:</strong> Mon - Sat: 9 AM - 6 PM</li>
      </ul>
    </Col>
    <Col>
      <h3>We Value Your Feedback</h3>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            value={appreviews.username}
            onChange={(e) => setAppreview({...appreviews,username:e.target.value})}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            value={appreviews.email}
            onChange={(e) => setAppreview({...appreviews,email:e.target.value})}

          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Your Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your feedback here..."
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            value={appreviews.review}
            onChange={(e) => setAppreview({...appreviews,review:e.target.value})}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
          }}
          onClick={(e) => handleAppReview(e)}
        >
          Submit Feedback
        </button>
      </form>
    </Col>
  </Row>
</Container>
    </>   
  )
}

export default Contact;