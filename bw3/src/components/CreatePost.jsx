import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import WhoCanSeeYourPost from "./WhoCanSeePost";
import { createPost } from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

const CreatePost = ({ visible, onhide, profile }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [postText, setPostText] = useState("");
  const dispatch = useDispatch();
  //   const post = useSelector((state) => state.createPost.profileData);
  const post = {
    text: postText,
  };
  console.log(post);

  const handleChange = (e) => {
    setPostText(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(createPost(post));
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
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-3 px-4">
        <Container>
          <Row className="d-flex justify-content-start align-items-center">
            <div>
              <img
                className="create-post-image mr-4"
                src={profile.image}
                alt={profile.name}
              />
            </div>
            <div>
              <Button variant="outline-secondary" className="mr-2 ">
                <Icon.PersonFill size={15} className="mr-2" />
                {profile.name}
                <Icon.CaretDownFill size={15} className="ml-2" />
              </Button>
            </div>
            <div>
              <Button onClick={handleShow} variant="outline-secondary">
                <Icon.GlobeEuropeAfrica size={15} className="mr-2" />
                Anyone
                <Icon.CaretDownFill size={15} className="ml-2" />
              </Button>
            </div>
          </Row>
          <Row>
            <Form.Group
              className="mb-3 w-100 mt-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Description</Form.Label> */}
              <Form.Control
                as="textarea"
                rows={15}
                placeholder="What do you want to talk about today?"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row>
            <Icon.EmojiSmile size={30} />
          </Row>
          <Row className="my-3">
            <div>
              <Icon.Image size={30} className="mr-4" />
              <Icon.PlayBtnFill size={30} className="mr-4" />
              <Icon.FileEarmarkRichtextFill size={30} className="mr-4" />
              <Icon.ThreeDots size={30} className="mr-4" />
            </div>
            <div>
              <Icon.ChatText size={30} className="mr-2" />
              <span>Anyone</span>
            </div>
            <div className="ml-auto">
              <Icon.Clock size={30} className="mr-5" />
              <Button onClick={handleSubmit} variant="primary" active>
                Post
              </Button>
            </div>
          </Row>
        </Container>
      </Modal.Body>
      {/* <EditContactInfo profile={profile} visible={show} onhide={handleClose} /> */}
      <WhoCanSeeYourPost
        profile={profile}
        visible={show}
        onhide={handleClose}
      />
    </Modal>
  );
};
export default CreatePost;
