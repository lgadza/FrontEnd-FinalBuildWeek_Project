import { Modal, Form, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import EditContactInfo from "./EditContactInfo";

const ContactInfo = ({ visible, onhide, profile }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal
      scrollable
      show={visible}
      size="lg"
      onHide={onhide}
      className="modal-hieght"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {profile.name} {"  "}
          {profile.surname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-3 px-4">
        <Container>
          <Link className="add-to-profile-link">
            <Row className="d-flex justify-content-between">
              <h5>Contact Info</h5>
              <Icon.Pencil onClick={handleShow} size={22} />
            </Row>
          </Link>
          <Link className="add-to-profile-link">
            <Row className="d-flex  my-3">
              <Icon.Linkedin size={22} className="mr-3" />
              <div>
                <h6>Your Profile</h6>
                <Link className="text-primary">
                  linkedin.com/in/{profile.name}-{profile.surname}-{profile._id}{" "}
                </Link>
              </div>
            </Row>
          </Link>
          <Link className="add-to-profile-link">
            <Row className="d-flex ">
              <Icon.Envelope size={22} className="mr-3 " />
              <div>
                <h6>Email</h6>
                <Link className="text-primary">{profile.email}</Link>
              </div>
            </Row>
          </Link>
        </Container>
      </Modal.Body>
      <EditContactInfo profile={profile} visible={show} onhide={handleClose} />
    </Modal>
  );
};
export default ContactInfo;
