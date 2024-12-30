import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import { otpResend, otpVerification, userRegister } from '../Services/AllAPI';

function Userslogin() {
  const [step,setStep] = useState(sessionStorage.getItem('step') || 1)
  const [otp,setOtp] = useState('')
  const [User,setUser] = useState({
    fname:'',
    sname:'',
    email: sessionStorage.getItem('email') || '',
    password:''
  })
  const navigate = useNavigate()
  // console.log(User);

  useEffect(()=>{
    sessionStorage.setItem('email',User.email)
    sessionStorage.setItem('step',step)
  },[User.email,step])

  const handleRegister = async(e)=>{
    e.preventDefault()
    const {fname,sname,email,password} = User
    if(!fname|| !sname || !email || !password){
      alert('Please fill the form!!!')
    }else{
      // api call
      const response = await userRegister(User)
      // console.log(response);

      if(response.status === 200){
        setStep(2)
      }else if(response.status=== 409){
        alert(response.response.data.message)
      }else{
        alert('Server Error')
        console.log(response);
      }
    }

  }
  //otp verification
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const {email} =User
    if(!otp){
      alert('Enter the OTP')
    }
    const reqBody = {
      email,
      otp
    } 
 const response = await otpVerification(reqBody)
 if(response.status === 200){
  alert("Registration successful")
  navigate('/login')
 }else if(response.status === 400){
  alert("Invalid OTP Try agian")
 }else if(response.status === 410){
  alert("OTP time out ")
 }else{
  alert("server error")
 }
  
  }
  //Resend otp

  const handleResend = async(e)=>{
    e.preventDefault()
    const {email} = User
    const reqBody ={
      email,otp
    }
    const response = await otpResend(reqBody)
    if(response.status === 200){
      alert('Otp resend')
    }
  }
  
  return (
    <div>
        <section className="text-center text-lg-start"
        style={{backgroundColor: '#ffdd7b'}}>
  <style>
    {`
      .cascading-right {
        margin-right: -50px;
      }
      @media (max-width: 991.98px) {
        .cascading-right {
          margin-right: 0;
        }
          #dis{
          display:none
          }
      }
    `}
  </style>

  {/* Jumbotron */}
  <div className="container py-4" >
    <div className="row g-0 align-items-center">
      {/* Left Column */}
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div
          className="card cascading-right bg-body-tertiary"
          style={{ backdropFilter: "blur(30px)" }}
        >
          {
             step === 1 ?

            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline" data-mdb-input-init>
                      <input type="text" id="form3Example1" className="form-control" 
                     onChange={(e)=>setUser({...User,fname:e.target.value})} 
                      />
                      <label className="form-label" htmlFor="form3Example1">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline" data-mdb-input-init>
                      <input type="text" id="form3Example2" className="form-control" 
                     onChange={(e)=>setUser({...User,sname:e.target.value})} 
                      />
                      <label className="form-label" htmlFor="form3Example2">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
  
                {/* Email input */}
                <div className="form-outline mb-4" data-mdb-input-init>
                  <input type="email" id="form3Example3" className="form-control"
                     onChange={(e)=>setUser({...User,email:e.target.value})} 
  
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
  
                {/* Password input */}
                <div className="form-outline mb-4" data-mdb-input-init>
                  <input type="password" id="form3Example4" className="form-control"
                  onChange={(e)=>setUser({...User,password:e.target.value})}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
  
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  data-mdb-button-init
                  data-mdb-ripple-init 
                  onClick={(e)=>handleRegister(e)}
                >
                  CREATE
                </button>
                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Do you have an account? <a style={{color: '#393f81'}}><Link to={'/login'} >login</Link></a></p>
  
  
                {/* Register buttons */}
                <div className="text-center">
                  <p>or sign up with:</p>
                  
                    <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            const decoded = jwtDecode(credentialResponse.credential);
                            console.log(decoded);
                          }}
                          onError={() => {
                            console.log('Login Failed');
                          }}
                        />
                </div>
              </form>
            </div>
            :
            <div className="card-body p-5 shadow-5 text-center">
  <h3 className="mb-4">Verify Your OTP</h3>
  <div className="form-outline mb-4">
    <input
      type="text"
      className="form-control text-center"
      placeholder="Enter OTP"
      maxLength="6"
      aria-label="Enter OTP"
      style={{ fontSize: '1.2rem', letterSpacing: '0.3rem' }}
      onChange={(e)=>setOtp(e.target.value)}
    />
  </div>
  <button
    type="submit"
    className="btn btn-primary btn-block mb-3"
    data-mdb-button-init
    data-mdb-ripple-init
    onClick={(e)=>handleSubmit(e)}
  >
    Submit
  </button>
  <p>
    Didn't receive the OTP?{' '}
    <Link  style={{ color: '#393f81', fontWeight: 'bold' }}
    onClick={(e)=>handleResend(e)}
    >
      Resend OTP
    </Link>
  </p>
</div>

          }
        </div>
      </div>

      {/* Right Column */}
      <div className="col-lg-6 mb-5 mb-lg-0">
        <img
          src="https://gracedgirl.com/wp-content/uploads/2023/11/yp9fdeqacdk-1.jpg"
          className="w-100 rounded-4 shadow-4"
          alt=""
          id='dis'
          style={{height:'50rem',width:'80%'}}
        />
      </div>
    </div>
  </div>
  {/* Jumbotron */}
</section>
    </div>
  )
}

export default Userslogin