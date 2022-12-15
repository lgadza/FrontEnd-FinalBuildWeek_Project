import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../Redux/actions/index";

const DeletePost = ({ visible, onhide, postTextId, clicked }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePost(postTextId));
    console.log("deleted");
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
        <Modal.Title>Delete post?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-3 px-4">
        <Container className="d-flex flex-column">
          <h6 className="mb-4">
            Are you sure you want to permanently remove this post from LinkedIn?
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
export default DeletePost;
