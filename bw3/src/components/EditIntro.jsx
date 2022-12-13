import { Container, Form, Button, Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const EditIntro = () => {
  return (
    <Container>
      <Row>
        <Col md={8} className="edit-intro-col py-4 edit-intro">
          <div className="d-flex justify-content-between">
            <h5 className="edit-intro-edit">Edit intro</h5>
            <Link>
              <Icon.X size={25} />
            </Link>
          </div>
          <span>* Indicates required</span>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>First name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your first name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Last name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your last name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Additional name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your additional name"
              />
              <Form.Text className="text-muted">Name Pronunciation</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Headline*</Form.Label>
              <Form.Control type="text" placeholder="Civil Engineer" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <h5>Current Position</h5>
              <Form.Label>Position*</Form.Label>
              <Form.Control type="text" placeholder="Web Dev" required />
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
                required
              />
              <Form.Text className="text-muted">
                Learn more about{" "}
                <Link className="text-warning">industry options</Link>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <h5>Location</h5>
              <Form.Label>Coutry/Region*</Form.Label>
              <Form.Control type="text" placeholder="Zimbabwe" required />
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
              <Link className="text-primary">Edit contact info</Link>
            </Form.Group>

            <div className="div-save-btn">
              <Button className="save-btn" variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default EditIntro;
