import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as Icon from "react-bootstrap-icons";
import profileReducer from "../Redux/reducers/profileReducer";
import React, { useState } from "react";
import DeleteProfileImage from "./DeleteProfilImage";
import PostProfileImage from "./PostProfileImage";

const EditProfileImage = ({ visible, onhide, profile }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPostImage, setShowPostImage] = useState(false);
  const handleClosePostImage = () => setShowPostImage(false);
  const handleShowPostImage = () => setShowPostImage(true);

  return (
    <Modal
      bg={"dark"}
      variant="dark"
      scrollable
      show={visible}
      size="lg"
      onHide={onhide}
      className="modal-hieght"
    >
      <Modal.Header closeButton>
        <Modal.Title>Profile photo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-3 mx-auto px-4">
        <div>
          <img className="edit-profile-image" src={profile.image} alt="" />
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
      <div className="d-flex justify-content-between ml-4 mb-4">
        <div className="d-flex  ">
          <div className="d-flex flex-column mr-5 justify-content-center align-items-center">
            <Icon.Pencil size={30} />
            <span>Edit</span>
          </div>
          <div
            onClick={handleShowPostImage}
            className="d-flex flex-column mr-5 justify-content-center align-items-center"
          >
            <Icon.Camera size={30} />
            <span>Add photo</span>
          </div>
          <div className="d-flex flex-column mr-5 justify-content-center align-items-center">
            <Icon.ImageFill size={30} />
            <span>Frames</span>
          </div>
        </div>
        <div
          onClick={handleShow}
          className="d-flex flex-column mr-4 justify-content-center align-items-center"
        >
          <Icon.Trash size={30} />
          <span>Delete</span>
        </div>
      </div>
      <DeleteProfileImage visible={show} onhide={handleClose} />
      <PostProfileImage
        visible={showPostImage}
        onhide={handleClosePostImage}
        userId={profile._id}
      />
    </Modal>
  );
};
export default EditProfileImage;
