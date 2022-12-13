import { Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
const EachSearch = ({ profile }) => {
  //   const [check, setCheck] = useState("");
  const Clicked = () => {
    console.log("Clicked");
  };

  return (
    <Link onClick={Clicked} to={`/user-profile/`}>
      <Row className="d-flex align-items-center justify-content-between mx-1 pt- ">
        <Col>
          <Link to="" className="text-decoration-none">
            <div className="d-flex align-items-center mr-3">
              <Icon.Clock className="mr-2" size={10} />
              <span className="search-profile">
                {profile.name} {profile.surname}{" "}
              </span>
              <span>
                <Icon.Dot />
              </span>
              <span className="search-profile  title">{profile.title}</span>
            </div>
          </Link>
        </Col>

        <Col className="d-flex justify-content-end space-search">
          <Link>
            <img
              className="search-profiles   "
              src={profile.image}
              alt={profile.name}
            />
          </Link>
        </Col>
      </Row>
    </Link>
  );
};
export default EachSearch;
