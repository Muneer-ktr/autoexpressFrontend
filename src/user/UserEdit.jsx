import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { userprofile } from '../Services/AllAPI';

function UserEdit() {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({
    firstname: '',
    secondname: '',
    phonenumber: '',
    address: '',
    gender: 'Not Specified',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async () => {
    const { firstname, secondname, phonenumber, address, gender } = userData;

    if (!firstname || !secondname || !phonenumber || !address || !gender) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await userprofile(userData); 
      if (response?.status === 200) {
        alert('Profile updated successfully');
        handleClose();
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      alert('An error occurred while saving profile');
      console.error(error);
    }
  };
  return (
    <div>
      <Button variant="primary" className="me-2" onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={userData.firstname}
                placeholder="Enter your first name"
                onChange={(e) => setUserData({ ...userData, firstname: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Second Name</Form.Label>
              <Form.Control
                type="text"
                value={userData.secondname}
                placeholder="Enter your second name"
                onChange={(e) => setUserData({ ...userData, secondname: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                value={userData.phonenumber}
                placeholder="Enter your phone number"
                onChange={(e) => setUserData({ ...userData, phonenumber: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={userData.address}
                placeholder="Enter your address"
                onChange={(e) => setUserData({ ...userData, address: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                value={userData.gender}
                onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
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
