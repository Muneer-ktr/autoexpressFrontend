import React, { useState } from "react";
import {Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import UserEdit from "./UserEdit";

function UserProfile() {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
  });

  const handleEditProfile = (updatedData) => {
    setUserData(updatedData);
  };

  return (
    <div>
      <Container className="py-5">
        <h1 className="text-center mb-4">My Profile</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="shadow-lg">
              {/* User Image */}
              <Card.Img
                variant="top"
                src={"https://png.pngtree.com/png-vector/20240914/ourlarge/pngtree-cartoon-user-avatar-vector-png-image_13572228.png"}
                alt="User Profile"
                className="img-fluid rounded-circle p-3"
                style={{ width: "150px", margin: "0 auto" }}
              />
              {/* Card Body */}
              <Card.Body>
                <Card.Title className="text-center">{userData.name}</Card.Title>
                <Card.Text className="text-muted text-center">
                </Card.Text>
              </Card.Body>
              {/* User Details */}
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <strong>Name:</strong> {userData.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phone:</strong> {userData.phone}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Address:</strong> {userData.address}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Gender:</strong> {userData.gender}
                </ListGroup.Item>
              </ListGroup>
              {/* Action Buttons */}
              <Card.Body className="text-center">
                <UserEdit userData={userData} onSave={handleEditProfile} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
