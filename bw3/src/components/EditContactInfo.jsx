import React from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const EditContactInfo = ({ visible, onhide, profile }) => {
  return (
    <Modal scrollable show={visible} size="lg" onHide={onhide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit contact info</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0">
        <Row className="notifyDiv p-3 ">
          <Col>
            <div>
              <p className="m-0 p-0 fontGray">Profile URL</p>
              <Link className="text-primary">
                https://www.linkedin.com/in/{profile.name}-{profile.surname}-
                {profile._id}{" "}
                <Icon.BoxArrowUpRight className="ml-1" size={10} />
              </Link>
            </div>
            <div>
              <p className="m-0 p-0 fontGray">Email</p>
              <Link className="text-primary">
                {profile.email}
                <Icon.BoxArrowUpRight className="ml-1" size={10} />
              </Link>
            </div>
          </Col>
          <Form.Check type="switch" id="custom-switch" />
        </Row>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="tel" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Phone type</Form.Label>
            <Form.Control as="select">
              <option>Please select</option>
              <option>Home</option>
              <option>Work</option>
              <option>Mobile</option>
            </Form.Control>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Birtday</Form.Label>
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
                  <option>Day</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="outline-secondary">
              <Icon.EyeFill size={15} className="mr-1" />
              Your network
            </Button>
          </Form.Group>
          <Form.Group className="mb-3 d-flex flex-column">
            <Form.Label>Website</Form.Label>
            <Link className="text-primary">
              <Icon.Plus size={15} /> Add website
            </Link>
          </Form.Group>
          <Form.Group className="mb-3 d-flex flex-column">
            <Form.Label>Instant Messaging</Form.Label>
            <Link className="text-primary">
              <Icon.Plus size={15} /> Add meessageing option
            </Link>
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

export default EditContactInfo;
