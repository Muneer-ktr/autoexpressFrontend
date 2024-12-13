import React from 'react'
import {  Col, Table } from 'react-bootstrap'

function Orders() {
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Splender Gbox</td>
                  <td>
                    <img
                      src="https://5.imimg.com/data5/IM/FJ/AC/SELLER-27652367/super-splendor-gear-kit-500x500.jpg"
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
                  <td>₹1500</td>
                  <td>
                    Arrived
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
    </div>
  )
}

export default Orders