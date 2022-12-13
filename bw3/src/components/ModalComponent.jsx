import React from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModalComponent = ({ visible, onhide }) => {
  return (
    <Modal scrollable show={visible} size="lg" onHide={onhide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0">
        <Row className="notifyDiv p-3 ">
          <Col>
            <h6 className="m-0">Notify network</h6>
            <p className="m-0 p-0 fontGray">
              Turn on to notify your network of key profile changes (such as new
              job) and work anniversaries. Updates can take up to 2 hours. Learn
              more about
              <Link className="themeFont"> sharing profile changes.</Link>
            </p>
          </Col>
          <Form.Check type="switch" id="custom-switch" />
        </Row>
        <p className="mt-2">* Indicates required</p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Retail Sales Manager"
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Employment type</Form.Label>
            <Form.Control as="select">
              <option>Please select</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Self-employed</option>
              <option>Frelancer</option>
              <option>Internship</option>
            </Form.Control>
            <p>
              Learn more about{" "}
              <Link className="themeFont">employment types.</Link>
            </p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Microsoft"
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: London United Kingdom"
              autoFocus
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I am currently working in this role"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Start date*</Form.Label>
            <Row>
              <Col>
                <Form.Control as="select" required>
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control as="select" required>
                  <option>Year</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>End date*</Form.Label>
            <Row>
              <Col>
                <Form.Control as="select" required>
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control as="select" required>
                  <option>Year</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Industry*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Information Technology & Services"
              autoFocus
              required
            />
            <p className="p-0 m-0">
              LinkedIn uses industry information to provide more relevant
              recommendations{" "}
            </p>
            <p className="">
              Learn more about{" "}
              <Link className="themeFont">industry options</Link>
            </p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Profile headline</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: React Native developer"
              autoFocus
            />
            <p className="p-0 m-0">
              Appears below your name at the top of the profile{" "}
            </p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onhide}>
          Close
        </Button>
        <Button variant="primary" onClick={onhide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
