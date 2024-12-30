import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getOrderadmin } from '../Services/AllAPI'

function TrackOrder() {

  const [orderss,setOrderss] = useState([])

 const getorderDeatils =async()=>{
   const token = sessionStorage.getItem('token')
 
   const reqHeader = {
     'Authorization': `Bearer ${token}`,
     "Content-Type":"application/json"
   }
   
   const response = await getOrderadmin(reqHeader)
   
   setOrderss(response.data)
   console.log(response);
 }
 useEffect(()=>{
   getorderDeatils()
 },[]) 
 console.log(orderss);

  return (
    <div>
          <div className='container'>
             <Table className='table' striped bordered hover>
              <thead className='thead-dark'>
                <tr>
                  <th>NO</th>
                  <th>Order ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Shipment Status</th>
                  <th>Arrival Date</th>
                </tr>
              </thead>
              <tbody>

               { orderss?.map((order,index)=>(
                 <tr key={index}>
                 <td>{index+1}</td>
                 <td>{order._id}</td>
                 <td>{order.productID.productname}</td>
                 <td>{order.userID.email}</td>
                 <td>shipped</td>
                 <td>arrived</td>
     
               </tr>
               )) 
               }

              </tbody>
            </Table>
        </div> 
    </div>
  )
}

export default TrackOrder