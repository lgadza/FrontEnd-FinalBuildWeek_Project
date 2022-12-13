import { Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SearchResults = ({ profiles }) => {
  console.log(profiles);
  return (
    <Container className="search-results  nav-arrange mt-2  ">
      {profiles && (
        <div>
          {profiles.slice(0, 16).map((profile) => (
            <Row key={profile.id}>
              <Col className="d-flex align-items-center justify-content-between">
                <Link to="" className="text-decoration-none">
                  <div className="d-flex align-items-center mr-3">
                    <Icon.Clock className="mr-2" size={10} />
                    <span className="search-profile">
                      {profile.name} {profile.surname}{" "}
                    </span>
                    <span>
                      <Icon.Dot />
                    </span>
                    <span className="search-profile  title">
                      {profile.title}
                    </span>
                  </div>
                </Link>

                <Link>
                  <img
                    className="search-profiles   "
                    src={profile.image}
                    alt={profile.name}
                  />
                </Link>
              </Col>
            </Row>
          ))}
        </div>
      )}
    </Container>
  );
};
export default SearchResults;
