import { Modal, Form, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import AccordionComponent from "./AccordionComponent";

const AddToProfile = ({ visible, onhide }) => {
  return (
    <Modal
      scrollable
      show={visible}
      size="lg"
      onHide={onhide}
      className="modal-hieght"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add to profile</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0">
        <Container>
          <Link className="add-to-profile-link">
            <Row className="d-flex justify-content-between">
              <h6>Core</h6>
              <Icon.CaretDown size={22} />
            </Row>
          </Link>
          <Link className="add-to-profile-link">
            <Row className="d-flex justify-content-between my-3">
              <h6>Recommended</h6>
              <Icon.CaretDown size={22} />
            </Row>
          </Link>
          <Link className="add-to-profile-link">
            <Row className="d-flex justify-content-between">
              <h6>Additional</h6>
              <Icon.CaretDown size={22} />
            </Row>
          </Link>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default AddToProfile;
