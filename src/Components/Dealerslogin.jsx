import React, { useEffect, useState } from 'react'
import prime from '../assets/prime.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { dealeRegister } from '../Services/AllAPI'

function Dealerslogin() {
    const [preview,setPreview] = useState('')
    const navigate = useNavigate()
    const [dealer,setDealer] = useState({
        fname:'',
        sname:'',
        email:'',
        password:'',
        license:'',
        discription:''
    })
    // const navigate = useNavigate()


    const handleSubmit = async(e)=>{
        e.preventDefault()
      const {fname,sname,email,password,license,discription} = dealer
      console.log(fname);
      
      if(!fname ||!sname ||!email || !password||!license||!discription){
        alert('error')
      }else{
        const reqBody = new FormData()

        reqBody.append('fname',fname)
        reqBody.append('sname',sname)
        reqBody.append('email',email)
        reqBody.append('password',password)
        reqBody.append('license',license)
        reqBody.append('discription',discription)

        const reqHeader = {
            "Content-Type":"multipart/form-data"
        }
        
        const response = await dealeRegister(reqBody,reqHeader)
        console.log(response);
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
    
useEffect(()=>{
    if(dealer.license){
        setPreview(URL.createObjectURL(dealer.license))
    }
})
    return (
        <div>
            <section className="text-center text-lg-start"
                style={{ backgroundColor: '#ff937b' }}>
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
                                    <h2 className="fw-bold mb-5">Dealer Register</h2>
                                    <form>
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline" data-mdb-input-init>
                                                    <input type="text" id="form3Example1" className="form-control" 
                                                    onChange={(e)=>setDealer({...dealer,fname:e.target.value})}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1">
                                                        First name
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline" data-mdb-input-init>
                                                    <input type="text" id="form3Example2" className="form-control"
                                                    onChange={(e)=>setDealer({...dealer,sname:e.target.value})}
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
                                            onChange={(e)=>setDealer({...dealer,email:e.target.value})}
                                            />
                                            <label className="form-label" htmlFor="form3Example3">
                                                Email address
                                            </label>
                                        </div>

                                        {/* Password input */}
                                        <div className="form-outline mb-4" data-mdb-input-init>
                                            <input type="password" id="form3Example4" className="form-control"
                                            onChange={(e)=>setDealer({...dealer,password:e.target.value})}
                                            />
                                            <label className="form-label" htmlFor="form3Example4">
                                                Password
                                            </label>
                                        </div>

                                        <div className="mb-3 ">
                                            <label htmlFor="formFileMultiple" className="form-label">Upload Your Licence</label>
                                           <label>
                                                <input className="form-control" type="file" id="formFileMultiple" multiple
                                                onChange={(e)=>setDealer({...dealer,license:e.target.files[0]})}
                                                />
                                           </label>
                                           {
                                            preview &&
                                            <img style={{height:'300px',width:'50%'}} src={preview} alt="" />
                                           }
                                        </div>

                                        <div className="mb-3">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} placeholder='Add Description'
                                            style={{height:'50px'}}
                                            onChange={(e)=>setDealer({...dealer,discription:e.target.value})}
                                            />
                                        </div>

                                        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Do you have an account? <a style={{color: '#393f81'}}><Link to={'/login'}>login</Link></a></p>

                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block mb-4"
                                            data-mdb-button-init
                                            data-mdb-ripple-init
                                            onClick={(e)=>handleSubmit(e)}
                                        >
                                           Register
                                        </button>

                                        {/* Register buttons */}

                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img
                                src={prime}
                                className="w-100 rounded-4 shadow-4"
                                alt=""
                                id='dis'
                                style={{ height: '50rem', width: '80%',objectFit:'cover' }}
                            />
                        </div>
                    </div>
                </div>
                {/* Jumbotron */}
            </section>

        </div>
    )
}

export default Dealerslogin