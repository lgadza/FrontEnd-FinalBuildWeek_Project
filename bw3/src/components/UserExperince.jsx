import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const UserExperince = ({ profileData }) => {
  return (
    <Col md={9} className="top-profile-section mt-2">
      <div className="d-flex justify-content-between mt-4   back-ground px-3">
        <h4>Experience</h4>
        <div>
          <Link>
            <Icon.PlusLg size={25} className="mr-4" />
          </Link>
          <Link>
            <Icon.Pencil size={25} />
          </Link>
        </div>
      </div>

      <div className="mt-5  back-ground px-3">
        <div className="d-flex">
          <img src="" alt="" />
          <div>
            {/* <h5>{profileData.title} </h5> */}
            <h5>Junior Programmer </h5>
            <h6>
              Company Name <Icon.Dot /> Full-time
            </h6>
            <h6 className="gray-out">
              Month Year - End Month Year <Icon.Dot /> Period At the comp
            </h6>
            <h6 className="gray-out">City, Coutry</h6>
            <div className="d-flex ">
              <h6>Skill:</h6>
              <span>
                JavaScript · HTML · Cascading Style Sheets (CSS) · React.js ·
                Bootstrap · Node.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default UserExperince;
