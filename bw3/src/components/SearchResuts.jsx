import { Container, Row } from "react-bootstrap";
import EachSearch from "./EachSeach";

const SearchResults = ({ profiles, hide }) => {
  return (
    <Container className="search-results  nav-arrange mt-2  ">
      {profiles && (
        <div>
          {profiles.slice(0, 14).map((profile) => (
            <Row key={profile._id}>
              <EachSearch profile={profile} hide={hide} />
            </Row>
          ))}
        </div>
      )}
    </Container>
  );
};
export default SearchResults;
