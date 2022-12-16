import {
  Container,
  Form,
  Button,
  Col,
  Row,
  Spinner,
  Modal,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getProfileEdit } from "../Redux/actions";
import EditContactInfo from "./EditContactInfo";
import { getProfilData } from "../Redux/actions/index";

const EditIntro = ({ visible, onhide, profile }) => {
  //   const [edit, setEdit] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.edit.profileData);
  const [editName, setEditName] = useState(data.name);
  const [editSurname, setEditSurname] = useState(data.surname);
  const [editUsername, setEditUsername] = useState(data.username);
  const isLoading = useSelector((state) => state.edit.isLoading);
  const [editLocation, setEditLocation] = useState(data.area);
  const [editTitle, setEditTitle] = useState(data.title);
  const [editBio, setEditBio] = useState(data.bio);

  console.log(data);
  const editedProfile = {
    name: editName,
    surname: editSurname,
    username: editUsername,
    title: editTitle,
    bio: editBio,
    area: editLocation,
  };
  console.log(editedProfile);
  const update = () => {
    dispatch(getProfilData());
    onhide();
  };
  useEffect(() => {
    dispatch(getProfileEdit());
  }, []);
  const handleChange = (e) => {
    setEditName(e.target.value);
    dispatch(getProfileEdit(editedProfile));
  };
  const handleSurname = (e) => {
    setEditSurname(e.target.value);
    dispatch(getProfileEdit(editedProfile));
  };
  const handleTitle = (e) => {
    setEditTitle(e.target.value);
    dispatch(getProfileEdit(editedProfile));
  };
  const handleUsername = (e) => {
    setEditUsername(e.target.value);
    dispatch(getProfileEdit(editedProfile));
  };
  const handleLocation = (e) => {
    setEditLocation(e.target.value);
    dispatch(getProfileEdit(editedProfile));
  };
  const handleBio = (e) => {
    setEditBio(e.target.value);
    dispatch(getProfileEdit(editedProfile));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal scrollable show={visible} size="lg" onHide={onhide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit intro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className=" w-100 d-flex flex-column justify-content-center   ">
          {isLoading && (
            <Spinner
              animation="border"
              role="status"
              className="custom-spinner-color"
            ></Spinner>
          )}
          <Row>
            <Col className="edit-intro-col py-4 edit-intro">
              <span>* Indicates required</span>
              <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>First name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your first name"
                    value={editName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Last name*</Form.Label>
                  <Form.Control
                    type="text"
                    value={editSurname}
                    onChange={handleSurname}
                    placeholder="Enter Your last name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Additional name</Form.Label>
                  <Form.Control
                    type="text"
                    value={editUsername}
                    onChange={handleUsername}
                    placeholder="Enter Your additional name"
                  />
                  <Form.Text className="text-muted">
                    Name Pronunciation
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Headline*</Form.Label>
                  <Form.Control
                    type="text"
                    value={editTitle}
                    onChange={handleTitle}
                    placeholder="Civil Engineer"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <h5>Current Position</h5>
                  <Form.Label>Position*</Form.Label>
                  <Form.Control
                    type="text"
                    value={editBio}
                    onChange={handleBio}
                    // placeholder="Web Dev"
                    required
                  />
                </Form.Group>
                <Link className="text-primary">
                  <Icon.Plus size={20} /> <span>Add new Position</span>
                </Link>

                <Form.Group
                  className="mb-3 d-flex align-items-center"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" />
                  <Form.Text className="text-muted">
                    Show current company in my intro
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Industry*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Software Development"
                    // required
                  />
                  <Form.Text className="text-muted">
                    Learn more about{" "}
                    <Link className="text-warning">industry options</Link>
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <h5>Location</h5>
                  <Form.Label>Coutry/Region*</Form.Label>
                  <Form.Control
                    type="text"
                    value={editLocation}
                    onChange={handleLocation}
                    placeholder="Zimbabwe"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Postal code</Form.Label>
                  <Form.Control type="text" placeholder="15-333" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <h5>Contact info</h5>
                  <Form.Text className="text-muted">
                    Add or edit your profile URL, email, and more
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Link onClick={handleShow} className="text-primary">
                    Edit contact info
                  </Link>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onhide}>
          Close
        </Button>
        <Button variant="primary" onClick={update}>
          Save Changes
        </Button>
      </Modal.Footer>

      <EditContactInfo profile={data} visible={show} onhide={handleClose} />
    </Modal>
  );
};
export default EditIntro;
