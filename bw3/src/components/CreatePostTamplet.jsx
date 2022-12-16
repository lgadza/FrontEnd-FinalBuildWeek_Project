import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getPost } from "../Redux/actions";

const CreatePostTample = ({ visible, onhide, file, postId }) => {
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

  const handleUpload = (e) => {
    let files = state.files;

    let formData = new FormData();

    formData.append("profile", files[0]);
    axios({
      url: `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
      method: "POST",
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8",
      },
      data: formData,
    })
      .then(function () {
        dispatch(getPost());
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
        <Modal.Title>Edit your {file}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-3 px-4">
        <Container>
          <Row className="mx-auto w-100 justify-content-center mb-5">
            <Link className="text-primary mb-5">Select {file} to share</Link>
          </Row>
          <Row className="mx-auto w-100 justify-content-center mt-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="file" onChange={(e) => handleFile(e)} />
              </Form.Group>
            </Form>
          </Row>

          <Row className="mt-5 ">
            <div className="ml-auto">
              <Button onClick={onhide} variant="outline-primary">
                Cancel
              </Button>
              <Button variant="out-line-primary" onClick={handlePost}>
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
