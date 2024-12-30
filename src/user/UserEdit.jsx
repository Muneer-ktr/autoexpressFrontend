import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function UserEdit() {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    address: '',
    dob: '',
    gender: 'Not Specified',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleSave = () => {

  };

  return (
    <div>
      {/* Button to Open Modal */}
      <Button variant="primary" className="me-2" onClick={handleShow}>
        Edit Profile
      </Button>

      {/* Edit Profile Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userData.name}
                placeholder="Enter your name"
                onChange={(e)=>setUserData({...userData,name:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>SecondName</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userData.name}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={userData.phone}
                placeholder="Enter your phone number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={userData.address}
                placeholder="Enter your address"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={userData.gender}
              >
                <option value="Not Specified">Not Specified</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserEdit;
