import React, { useEffect, useState } from 'react'
import {  Col, Table } from 'react-bootstrap'
import { getOrders,  } from '../Services/AllAPI'
import { baseURL } from '../Services/baseURL'
import axios from 'axios'

function Orders() {
    // const[product,setProduct] = useState({})

const [orders,setOrders] = useState([])
      

const getorderDeatls =async()=>{
  const token = sessionStorage.getItem('token')

  const reqHeader = {
    'Authorization': `Bearer ${token}`,
    "Content-Type":"application/json"
  }
  
  const response = await getOrders(reqHeader)
  
  setOrders(response.data)
  console.log(response);
}
useEffect(()=>{
  getorderDeatls()
},[])
//  console.log(orders);

  const invoicepdf = async(id)=>{
    const token = sessionStorage.getItem('token')

try {
      const invoiceResponse = await axios.post(`${baseURL}/invoice`,{id}, {responseType:'blob',headers: {
        'Content-Type': 'application/json','Authorization': `Bearer ${token}`

      }})
    console.log(invoiceResponse);
      const url = window.URL.createObjectURL(new Blob([invoiceResponse.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download',`receipt-${id}.pdf`)
      document.body.appendChild(link)
      link.click()
} catch (error) {
  console.error("Error generating PDF", error); 
 
}
  }
  return (
    <div>
        <Col xs={12} md={8} className='mt-4'>

          <div>
            <Table className="table" striped bordered hover responsive>
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
               {orders?.map((order,index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{order.productID.productname}</td>
                  <td>
                    <img
                      src={`${baseURL}/uploads/${order.productID.productImage}`}
                      alt="Super Splendor Gear Kit"
                      className="img-fluid"
                      style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  </td>
                  <td>₹{order.amount/100}</td>
                  <td>
                    {order.status}
                  </td>
                  <td>
                    <button 
                     style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }} onClick={()=>invoicepdf(order._id)}
                    >Download</button>
                  </td>
                </tr>
               )) }
              </tbody>
            </Table>
          </div>
        </Col>
    </div>
  )
}

export default Orders