import { Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const AboutComponent = ({ profile }) => {
  return (
    <Row className=" mx-auto my-2 py-2 top-profile-section  w-100">
      <div className="mx-3">
        <div className="d-flex justify-content-between w-100">
          <h5>About</h5>

          <Icon.Pencil />
        </div>
        <p className=" mt-4 ">{profile.bio}</p>
      </div>
    </Row>
  );
};

export default AboutComponent;
