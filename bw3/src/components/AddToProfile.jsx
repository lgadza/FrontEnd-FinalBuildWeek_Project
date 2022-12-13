import { Modal, Form, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const AddToProfile = ({ visible, onhide }) => {
  return (
    <Modal scrollable show={visible} size="lg" onHide={onhide}>
      <Modal.Header closeButton>
        <Modal.Title>Add to profile</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0">
        <Container>
          <Row>
            <h6>Core</h6>
            <Icon.CaretDown size={22} />
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default AddToProfile;
