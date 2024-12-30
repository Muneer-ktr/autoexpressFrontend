import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotpassword } from '../Services/AllAPI';

function Forgotpassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqBody = { email };

    try {
      const response = await forgotpassword(reqBody);

      if (response.status === 200) {
        alert('A reset link has been sent to your email.');
      } else {
        alert(response.message || 'Failed to send the reset link. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Forgot Password</h1>
      <p style={{ textAlign: 'center', maxWidth: '400px' }}>
        If you have forgotten your password, please enter your email address below. We will send you a link to reset your password.
      </p>

      <form
        style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" style={{ marginBottom: '8px' }}>Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          style={{ padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007BFF',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Send Reset Link
        </button>
      </form>
      <hr style={{ width: '100%', maxWidth: '400px', margin: '20px 0' }} />
      <p style={{ textAlign: 'center' }}>
        Remember your password? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Forgotpassword;
