import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import { updatedPassword } from '../Services/AllAPI';


function ResetPassword() {
  const {token} = useParams()
  const [message,setMessage] = useState('')
  const [password,setNewpassword] = useState('')
  const [conPassword,setConpassword] = useState('')
  const navigate = useNavigate()


  useEffect(()=>{
    const decodedToken = jwtDecode(token)
  
    const currenTime = Date.now()/1000

    if(currenTime>decodedToken.exp){
      setMessage('link Expired ')

      setTimeout(()=>{
        navigate('/forgotpassword')
      },3000)
    }
  },[token])

  const handelSubmit = async(e)=>{
    e.preventDefault()

    if(password !== conPassword){
      setMessage('password not match')
      return
    }

    const reqBody = {
      token,password
    }
   try {
     
     const response = await updatedPassword(reqBody)
     console.log(response);
     
     if(response.status === 200){
       setMessage('password updated successfully')
       setTimeout(()=>{
         navigate('/login')
       },3000)
     }else{
       setMessage('Failed to update password..try agian later')
     }
 
   } catch (error) {
    console.log(error);
    setMessage('An error occurred. Please try again later')
    
   }  }
  
  return (
   <>
      {
      message?
        <p>{message}</p>
     
      :
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Change Password</h1>
      <p style={{ textAlign: 'center', maxWidth: '400px' }}>
        Please enter your current password and the new password you want to set.
      </p>
      <form 
        action="/change-password" 
        method="POST" 
        style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px' }}
      >
  
  
        <label htmlFor="new-password" style={{ marginBottom: '8px' }}>New Password:</label>
        <input 
          type="password" 
          id="new-password" 
          name="newPassword" 
          placeholder="Enter your new password" 
          required 
          style={{ padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
          onChange={(e)=>setNewpassword(e.target.value)}
        />
  
        <label htmlFor="confirm-password" style={{ marginBottom: '8px' }}>Confirm New Password:</label>
        <input 
          type="password" 
          id="confirm-password" 
          name="confirmPassword" 
          placeholder="Confirm your new password" 
          required 
          style={{ padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
          onChange={(e)=>setConpassword(e.target.value)}
        />
  
        <button 
          type="submit" 
          style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}
          onClick={handelSubmit}
        >
          Change Password
        </button>
      </form>
      <hr style={{ width: '100%', maxWidth: '400px', margin: '20px 0' }} />
  
    </div>
    }
   </>
  )
}

export default ResetPassword