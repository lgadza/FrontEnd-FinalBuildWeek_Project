import { Modal, Row, Container, Col, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const WhoCanSeeYourPost = ({ visible, onhide, profile }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal
      scrollable
      show={visible}
      size="lg"
      onHide={onhide}
      className="modal-hieght"
    >
      <Modal.Header closeButton>
        <Modal.Title>Who can see your post?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 mt-3 px-4">
        <Container className="d-flex flex-column">
          <h6 className="mb-4">
            Your post will be visible on feed, on your profile and in search
            results
          </h6>
          <Form>
            <div className="d-flex mb-4  ">
              <label>
                <div className="d-flex align-items-center">
                  <Icon.GlobeEuropeAfrica size={30} className="mr-4" />
                  <div>
                    <h6>Anyone</h6>
                    <span>Anyone on or off Linkedin</span>
                  </div>
                </div>
              </label>
              <div className="ml-auto">
                <input name="checkbox" type="radio" value="option3" />
              </div>
            </div>
            <div className="d-flex  mb-4">
              <label>
                <div className="d-flex align-items-center">
                  <Icon.GlobeEuropeAfrica size={30} className="mr-4" />
                  <div>
                    <h6>Anyone + Twitter</h6>
                    <span>Anyone on or off Linkedin; post to Twitter</span>
                  </div>
                </div>
              </label>
              <div className="ml-auto">
                <input name="checkbox" type="radio" value="option3" />
              </div>
            </div>
            <div className="d-flex  mb-4">
              <label>
                <div className="d-flex align-items-center">
                  <Icon.PeopleFill size={30} className="mr-4" />
                  <div>
                    <h6>Connections only</h6>
                    <span>Connections on Linkedin</span>
                  </div>
                </div>
              </label>
              <div className="ml-auto">
                <input name="checkbox" type="radio" value="option3" />
              </div>
            </div>
            <div className="d-flex  mb-4">
              <label>
                <div className="d-flex align-items-center">
                  <Icon.PeopleFill size={30} className="mr-4" />
                  <div>
                    <h6>
                      Group <Icon.CaretRightFill size={20} />
                    </h6>
                    <span>Select a group you're in</span>
                  </div>
                </div>
              </label>
              <div className="ml-auto">
                <input name="checkbox" type="radio" value="option3" />
              </div>
            </div>
          </Form>
          <div className="ml-auto">
            <button onClick={onhide} className="primary px-4 py-1" active>
              Back
            </button>
            <button className="secondary px-4 py-1" active>
              Save
            </button>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default WhoCanSeeYourPost;
