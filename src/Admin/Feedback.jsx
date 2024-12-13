import React from 'react';
import { Table } from 'react-bootstrap';

function Feedback() {
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>User Name</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '5%', wordWrap: 'break-word' }}>1</td>
              <td style={{ width: '20%', wordWrap: 'break-word' }}>@Mark</td>
              <td style={{ width: '75%', wordWrap: 'break-word' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam alias totam, eos id amet ab iusto modi et unde distinctio consectetur molestiae nam illo in cumque facilis. Corporis, architecto.
              </td>
            </tr>
            <tr>
              <td style={{ width: '5%', wordWrap: 'break-word' }}>2</td>
              <td style={{ width: '20%', wordWrap: 'break-word' }}>@John</td>
              <td style={{ width: '75%', wordWrap: 'break-word' }}>
                Another sample feedback text to test responsiveness. This is a longer text to ensure the table works well on smaller screens.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Feedback;
