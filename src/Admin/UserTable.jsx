import React from 'react';
import { Table } from 'react-bootstrap';
import './usertable.css';

function UserTable() {
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
              <th>Order Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Product Name</td>
              <td>
                <button className="btn" id="hoverbtn">
                  <i
                    className="fa-solid fa-trash fa-lg"
                    style={{ color: '#ff0000' }}
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Another Product</td>
              <td>
                <button className="btn" id="hoverbtn">
                  <i
                    className="fa-solid fa-trash fa-lg"
                    style={{ color: '#ff0000' }}
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UserTable;
