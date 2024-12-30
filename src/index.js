import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import  Loginprovider  from './Context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Loginprovider>
      <BrowserRouter>
     <GoogleOAuthProvider clientId='993849432096-ijtj8612n7td658tmm2flvpp378mfamm.apps.googleusercontent.com'>
          <App />
       </GoogleOAuthProvider>
      </BrowserRouter>
    </Loginprovider>
  </React.StrictMode>
);


