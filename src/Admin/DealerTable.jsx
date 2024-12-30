import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { dealerStatus, deleteDealer, getDealers } from '../Services/AllAPI'
import { baseURL } from '../Services/baseURL'

function DealerTable(){
  const [dealers,setDealers] =useState([])

  const getDealerDeatils = async()=>{
    const token = sessionStorage.getItem('token')

    const reqHeader = {
      'Authorization': `Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const response = await getDealers(reqHeader)
    setDealers(response.data)
  }

  useEffect(()=>{
    getDealerDeatils()
  },[])

  const updateDealerStatus = async(id,status)=>{
    const token = sessionStorage.getItem('token')

    const reqHeader = {
      'Authorization': `Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const response = await dealerStatus(id,status,reqHeader)
    getDealerDeatils()
    console.log(response);
    
  }

  const handleDelete =async(id)=>{
    const token = sessionStorage.getItem('token')

    const reqHeader = {
      'Authorization': `Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const response = await deleteDealer(id,reqHeader)
    getDealerDeatils()
    console.log(response);
  }
  return (
    <div className="container-fluid px-3">
    {/* Pending Dealers Table */}
    <div className="mb-5 mt-4">
      <h2 className="mb-4">Pending Dealers</h2>
      <Table responsive="md" striped bordered hover className="table">
        <thead className="thead-dark">
          <tr>
            <th>NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Dealer Mail</th>
            <th>Licence</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
{ dealers?.map((dealer,index)=>(
  !dealer.active &&
 <tr>
 <td>{index+1}</td>
 <td>{dealer.firstname}</td>
 <td>{dealer.secondname}</td>
 <td>{dealer.email}</td>
 <td>
   <a href={`${baseURL}/uploads/${dealer.licence}`} download={dealer.licence} className="text-decoration-none">click 
   {/* <img src={`${baseURL}/uploads/${dealer.licence}`} alt="license" style={{height:'20vh', width:'100%'}} /> */}
   </a>
 </td>
 <td style={{width:'5%'}}>{dealer.description}</td>
 <td>
   <div className="d-flex justify-content-around">
   <button className="btn btn-sm ms-2" id="hoverbtn" variant="dark" onClick={()=>updateDealerStatus(dealer._id,'approve')}>
       <i className="fa-solid fa-user-check fa-lg" style={{ color: "#058f07" }} />
     </button>
     <button className="btn btn-sm" id="hoverbtn" variant="dark" onClick={()=>updateDealerStatus(dealer._id,'rejected')}>
       <i className="fa-solid fa-trash fa-lg" style={{ color: "#ff0000" }} />
     </button>
   </div>
 </td>
</tr>
))       
          }
        </tbody>
      </Table>
    </div>

    {/* Approved Dealers Table */}
    <div className="mb-5">
      <h2 className="mb-4">Approved Dealers</h2>
      <Table responsive="md" striped bordered hover className="table">
        <thead className="thead-dark">
          <tr>
            <th>NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Dealer Mail</th>
            <th>Licence</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         { 
         dealers.map((dealer,index)=>(
             dealer.active &&
          <tr>
          <td>{index+1}</td>
          <td>{dealer.firstname}</td>
          <td>{dealer.secondname}</td>
          <td>@{dealer.email}</td>
          <td>
            <a href={`${baseURL}/uploads/${dealer.licence}`} target='_blank' download={dealer.licence} className="text-decoration-none">
              View Licence
            </a>
          </td>
          <td style={{width:'30%'}}>{dealer.description}</td>
          <td>
            <button className="btn btn-sm" id="hoverbtn" variant="dark"
            onClick={()=>handleDelete(dealer._id)}
            >
              <i className="fa-solid fa-trash fa-lg" style={{ color: "#ff0000" }} />
            </button>
          </td>
        </tr>
         )) 
         }
        </tbody>
      </Table>
    </div>
  </div>
  )
}

export default DealerTable