import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getAppreview } from '../Services/AllAPI';

function Feedback() {
  const [review,setReview] = useState([])

  const getreview = async()=>{
    const token = sessionStorage.getItem('token')

    const reqHeader = {
      'Authorization': `Bearer ${token}`,
      "Content-Type":"application/json"
    }
    const response = await getAppreview(reqHeader)
    setReview(response.data)
  }

  useEffect(()=>{
    getreview()
  })
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {review?.map((feedback,index)=>(
 <tr key={index}>
 <td style={{ width: '5%', wordWrap: 'break-word' }}>{index+1}</td>
 <td style={{ width: '20%', wordWrap: 'break-word' }}>{feedback.username}</td>
 <td style={{ width: '20%', wordWrap: 'break-word' }}>{feedback.email}</td>
 <td style={{ width: '75%', wordWrap: 'break-word' }}>{feedback.review} </td>
</tr>
            ))
             }
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Feedback;
