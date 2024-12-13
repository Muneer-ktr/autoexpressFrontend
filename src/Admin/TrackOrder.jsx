import React from 'react'
import { Table } from 'react-bootstrap'

function TrackOrder() {
  return (
    <div>
          <div className='container'>
             <Table className='table' striped bordered hover>
              <thead className='thead-dark'>
                <tr>
                  <th>NO</th>
                  <th>Track ID</th>
                  <th>Shipment Status</th>
                  <th>Arrival Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>255</td>
                  <td>shipped</td>
                  <td>arrived</td>
      
                </tr>
    
    
              </tbody>
            </Table>
        </div> 
    </div>
  )
}

export default TrackOrder