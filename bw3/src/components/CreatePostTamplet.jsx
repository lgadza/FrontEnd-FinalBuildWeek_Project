import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CreatePostTample = ({ visible, onhide, file }) => {
  return (
    <Modal
      scrollable
      show={visible}
      size="lg"
      onHide={onhide}
      className="modal-hieght"
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit your {file}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-3 px-4">
        <Container>
          <Row className="mx-auto w-100 justify-content-center">
            <Link className="text-primary">Select {file} to share</Link>
          </Row>

          <Row className="mt-5 ">
            <div className="ml-auto">
              <Button onClick={onhide} variant="outline-primary">
                Cancel
              </Button>
              <Button variant="out-line-primary" onClick={onhide}>
                Save
              </Button>
            </div>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default CreatePostTample;
