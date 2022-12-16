import { Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
const EachSearch = ({ profile, hide }) => {
  //   const [check, setCheck] = useState("");

  return (
    <Container className="d-flex align-items-center justify-content-between mx-1  ">
      <Link onClick={hide} to={`/user-profile/${profile._id}`}>
        <Row>
          <Col>
            <div className="d-flex align-items-center ">
              <Icon.Clock className="mr-2" size={10} />
              <span className="search-profile">
                {profile.name} {profile.surname}{" "}
              </span>
              <span>
                <Icon.Dot />
              </span>
              <span className="search-profile  title">{profile.title}</span>
            </div>
          </Col>

          <Col>
            <img
              className="search-profiles   "
              src={profile.image}
              alt={profile.name}
            />
          </Col>
        </Row>
      </Link>
    </Container>
  );
};
export default EachSearch;
