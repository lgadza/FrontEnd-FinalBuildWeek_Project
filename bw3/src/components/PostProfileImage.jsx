import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../Redux/actions/index";
import axios from "axios";
import { useState, useEffect } from "react";

const PostProfileImage = ({ visible, onhide, userId }) => {
  const dispatch = useDispatch();
  const handlePost = (e) => {
    handleUpload(e);
    console.log("deleted");
    onhide();
  };
  const [state, setState] = useState(null);
  const handleFile = (e) => {
    let files = e.target.files;
    setState({ files });
  };
  console.log(state.files);
  const handleUpload = (e) => {
    let files = state.files;

    let formData = new FormData();

    formData.append("image", files);
    formData.append("name", "Name");
    axios({
      url: `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8",
      },
      data: { "form-date": formData },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <Modal.Title>Add profile photo?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-5 pt-5 mx-auto align-items-center">
        <Container className="mt-5 pt-5 d-flex justfify-content-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="file" onChange={(e) => handleFile(e)} />
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <div className="ml-auto mt-5">
          <button onClick={onhide} className="primary px-4 py-1" active>
            Cancel
          </button>
          <button onClick={handlePost} className="secondary px-4 py-1" active>
            Post
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default PostProfileImage;
