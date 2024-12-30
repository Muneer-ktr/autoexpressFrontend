import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './usertable.css';
import { deleteUser, getUsers } from '../Services/AllAPI';

function UserTable() {
  const [users,setUsers] = useState([])

  const getUserDeatils = async()=>{
    const token = sessionStorage.getItem('token')

    const reqHeader = {
      'Authorization': `Bearer ${token}`,
      "Content-Type":"application/json"
    }
    const response = await getUsers(reqHeader)
    setUsers(response.data)
  }

  useEffect(()=>{
    getUserDeatils()
  },[])

    const handleDelete =async(id)=>{
      const token = sessionStorage.getItem('token')
  
      const reqHeader = {
        'Authorization': `Bearer ${token}`,
        "Content-Type":"application/json"
      }
  
      const response = await deleteUser(id,reqHeader)
      getUserDeatils()
      console.log(response);
    }

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <Table className="table" striped bordered hover>
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Mail</th>
              <th>UserID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user,index)=>(
 <tr key={index}>
 <td>{index+1}</td>
 <td>{user.firstname}</td>
 <td>{user.secondname}</td>
 <td>{user.email}</td>
 <td>{user._id}</td>
 <td>
   <button className="btn" id="hoverbtn">
     <i
       className="fa-solid fa-trash fa-lg"
       style={{ color: '#ff0000' }}
       onClick={()=>handleDelete(user._id)}
     />
   </button>
 </td>
</tr>
            ))
             }
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UserTable;
