import React, { useState } from 'react';
import log from '../assets/logimage.webp';
import hed from '../assets/Screenshot 2024-11-18 141245.png';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { userlogin } from '../Services/AllAPI';



function Loginform() {

  const [user,setUser] = useState({
    email:'',
    password:''
  })
const navigate = useNavigate()
  // console.log(user);

  const handleLogin = async(e)=>{
    e.preventDefault()
    const {email,password} = user
    if(!email || !password){
      alert("Please Enter Email & Password")
    }else{
      const response  = await userlogin(user)
      console.log(response);
      

      if(response.status === 200){
        // sessionStorage.setItem('user',JSON.stringify(response.data.existingUser))
        // sessionStorage.setItem('token',response.data.token)

        sessionStorage.setItem('user',JSON.stringify(response.data.existingUser))
        sessionStorage.setItem('token',response.data.token)
        if(response.data.existingUser.role=='admin'){
          navigate('/admin')

        }else if(response.data.existingUser.role=='dealer'){
          if(response.data.existingUser.active === true){
            navigate('/dealeradmin/dealerabout')
          }else(
            alert('You are not approved by admin')
          )
        }else{
          navigate('/')
        }

      }else if(response.status ===404){
        alert(response.response.data.message)
        console.log(response);
      }else{
        alert('sever error')
        console.log(response);
      }
    }
   

  }

  return (
    <section className="vh-100 login-container">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={log}
                    alt="Login illustration"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 1rem 1rem 1rem', height: '100%' }}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-7 d-flex align-items-center"
                  style={{ backgroundColor: '#ffe5dc' }}
                >
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: '#ff6219' }}
                        />
                        <span className="h1 fw-bold mb-0">
                          <img src={hed} alt="Company logo" style={{ width: '40%' }} />
                        </span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          aria-label="Email Address"
                          onChange={(e)=>setUser({...user,email:e.target.value})}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          aria-label="Password"
                          onChange={(e)=>setUser({...user,password:e.target.value})}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={(e)=>handleLogin(e)}
                        >
                          Login
                        </button>
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-dark btn-lg btn-block ms-4"
                            type="button"
                          >
                            Back to home
                          </button>
                        </Link>
                      </div>
                      <Link to="/forgot-password" className="small text-muted">
                        Forgot password?
                      </Link>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Don't have an account?{' '}
                        <Link to="/userlogin" style={{ color: '#393f81' }}>
                          Register here
                        </Link>
                      </p>
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          const decoded = jwtDecode(credentialResponse.credential);
                          console.log(decoded);
                        }}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                      />
                      <div className="mt-3">
                        <Link to="/terms" className="small text-muted">
                          Terms of use.
                        </Link>{' '}
                        <Link to="/privacy" className="small text-muted">
                          Privacy policy
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loginform;
