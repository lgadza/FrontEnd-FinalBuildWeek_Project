import { Col, Container, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const UserExperince = ({ profileData }) => {
  console.log(profileData);
  return (
    <Col md={9} className="top-profile-section mt-2">
      <div className="d-flex justify-content-between mt-4   back-ground px-3">
        <h4>Experience</h4>
        <div className="d-flex align-items-center">
          <NavDropdown
            title={
              <Link>
                <Icon.PlusLg size={25} className="mr-1" />
              </Link>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>
              <Link>
                <Icon.BriefcaseFill size={20} className="mr-2" /> Add position
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link>
                <Icon.Calendar3 size={20} className="mr-2" /> Add career break
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link>
            <Icon.Pencil size={25} />
          </Link>
        </div>
      </div>

      <div className="mt-5  back-ground px-3">
        <div className="d-flex">
          <img src="" alt="" />
          <div>
            <h5>{profileData.title} </h5>
            <h6>
              Company Name <Icon.Dot /> Full-time
            </h6>
            <h6 className="gray-out">
              Month Year - End Month Year <Icon.Dot /> Period At the comp
            </h6>
            <h6 className="gray-out">{profileData.area}</h6>
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
