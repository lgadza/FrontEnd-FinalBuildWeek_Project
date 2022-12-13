import { Container, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const EditIntro = () => {
  return (
    <Container className="edit-intro">
      <h5>Edit intro</h5>
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
          <Form.Control type="text" placeholder="Enter Your additional name" />
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

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
        <Form.Group
          className="mb-3 d-flex align-items-center"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" />
          <Form.Text className="text-muted">
            Show current company in my intro
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default EditIntro;
