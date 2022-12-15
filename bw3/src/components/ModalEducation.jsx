import React from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

const ModalEducation = ({ visible, onhide }) => {
  return (
    <Modal scrollable show={visible} size="lg" onHide={onhide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Education</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0">
        <Row className="notifyDiv p-3 ">
          <Col>
            <h6 className="m-0">Notify network</h6>
            <p className="m-0 p-0 fontGray">
              Turn on to notify your network of key profile changes (such as new
              job) and work anniversaries. Updates can take up to 2 hours. Learn
              more about
              <a className="themeFont"> sharing profile changes.</a>
            </p>
          </Col>
          <Form.Check type="switch" id="custom-switch" />
        </Row>
        <p className="mt-2">* Indicates required</p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>School*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Boston University"
              autoFocus
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Degree*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Bachelor`s"
              autoFocus
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Field of study*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Bussines"
              autoFocus
              required
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
            <br />
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
              <Form.Label>Grade</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Activities and societies</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Ex: Alpha Phi Omega Marching Band, Volleyball"
              rows={3}
            />
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

export default ModalEducation;
