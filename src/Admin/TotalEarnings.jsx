import React from 'react'
import { Table } from 'react-bootstrap'

function TotalEarnings() {
  return (
    <div>
          <div className='container'>
             <Table className='table mt-4' striped bordered hover>
              <thead className='thead-dark'>
                <tr>
                  <th>NO</th>
                  <th>Total Product sell</th>
                  <th>Total Earnings</th>
                </tr>   
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>25</td>
                  <td>45000</td>
                </tr>
    
    
              </tbody>
            </Table>
        </div> 
    </div>
  )
}

export default TotalEarnings