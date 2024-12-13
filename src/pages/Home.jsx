import React from 'react';
import vedio from '../assets/homevid1.mp4';
function Home() {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <video src={vedio} autoPlay loop muted style={{ width: '100%', height: 'auto' }}></video>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: '20px', 
        borderRadius: '10px' 
      }}>
        <h1>AutoXpress</h1>
        <p>Explore your auto world with us</p>
      </div>
    </div>
  );
}

export default Home;
