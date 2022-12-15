import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import WhoCanSeeYourPost from "./WhoCanSeePost";
import { createPost } from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { getPostEdit } from "../Redux/actions";
import PostImage from "./PostImage";
import { getProfilData } from "../Redux/actions/index";

const CreatePost = ({ clicked, visible, onhide, profile }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profile.profileData);
  console.log(clicked);
  const [showPostImage, setShowPostImage] = useState(false);
  const handleClosePostImage = () => setShowPostImage(false);
  const handleShowPostImage = () => setShowPostImage(true);

  const [postText, setPostText] = useState(profile.text);
  const post = {
    text: postText,
  };
  console.log(profileData.name);
  const handleChange = (e) => {
    setPostText(e.target.value);
  };

  useEffect(() => {
    dispatch(getPostEdit(post._id));
    dispatch(getProfilData());
  }, []);
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
                src={profileData.image}
                alt={profileData.name}
              />
            </div>
            <div>
              <Button variant="outline-secondary" className="mr-2 ">
                <Icon.PersonFill size={15} className="mr-2" />
                {profileData.name}
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
            {clicked && (
              <Form.Group
                className="mb-3 w-100 mt-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={15}
                  placeholder="What do you want to talk about today?"
                  value={postText}
                  onChange={handleChange}
                />
              </Form.Group>
            )}
          </Row>
          <Row>
            {clicked ? (
              false
            ) : (
              <Form.Group
                className="mb-3 w-100 mt-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={15}
                  placeholder="What do you want to talk about today?"
                  onChange={handleChange}
                />
              </Form.Group>
            )}
          </Row>
          <Row>
            <Icon.EmojiSmile size={30} />
          </Row>
          <Row className="my-3">
            <div>
              <Icon.Image
                onClick={handleShowPostImage}
                size={30}
                className="mr-4"
              />
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
              <Button
                onClick={() => {
                  dispatch(createPost(post));
                  onhide();
                }}
                variant="primary"
                active
              >
                Post
              </Button>
            </div>
          </Row>
        </Container>
      </Modal.Body>

      <WhoCanSeeYourPost
        profile={profile}
        visible={show}
        onhide={handleClose}
      />
      <PostImage
        visible={showPostImage}
        onhide={handleClosePostImage}
        userId={profile._id}
      />
    </Modal>
  );
};
export default CreatePost;
