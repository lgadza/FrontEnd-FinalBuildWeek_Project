import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../Redux/actions/index";

const DeleteProfileImage = ({ visible, onhide, postTextId, clicked }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePost(postTextId));
    console.log("deleted");
    onhide();
  };
  return (
    <Modal
      scrollable
      show={visible}
      size="lg"
      onHide={onhide}
      className="modal-hieght"
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete profile photo?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-3 px-4">
        <Container className="d-flex flex-column">
          <h6 className="mb-4">
            Are you sure? Having a profile picture helps others recognize you.
          </h6>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <div className="ml-auto mt-5">
          <button onClick={onhide} className="primary px-4 py-1" active>
            Cancel
          </button>
          <button onClick={handleDelete} className="secondary px-4 py-1" active>
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default DeleteProfileImage;
