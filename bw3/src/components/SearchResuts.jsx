import { Col, Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const SearchResults = ({ profiles }) => {
  console.log(profiles);
  return (
    <Container className="search-results  nav-arrange mt-2  ">
      {profiles && (
        <div>
          {profiles.slice(0, 6).map((profile) => (
            <Row key={profile.id}>
              <Col className="d-flex align-items-center justify-content-between">
                <div className="mr-5 pr-5">
                  <Icon.Clock className="mr-2" size={10} />
                  <span className="search-profile">
                    {profile.name} {profile.surname}{" "}
                  </span>
                  <span>
                    <Icon.Dot />
                  </span>
                  <span className="search-profile">{profile.title}</span>
                </div>
                <img
                  className="search-profiles  "
                  src={profile.image}
                  alt={profile.name}
                />
              </Col>
            </Row>
          ))}
        </div>
      )}
    </Container>
  );
};
export default SearchResults;
