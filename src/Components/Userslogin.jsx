import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import { userRegister } from '../Services/AllAPI';

function Userslogin() {
  const [User,setUser] = useState({
    fname:'',
    sname:'',
    email:'',
    password:''
  })
  const navigate = useNavigate()
  // console.log(User);

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
        alert("Registration successful")
        navigate('/login')
      }else if(response.status=== 409){
        alert(response.response.data.message)
      }else{
        alert('Server Error')
        console.log(response);
      }
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