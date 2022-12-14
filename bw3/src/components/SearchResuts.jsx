import { Container, Row } from "react-bootstrap";
import EachSearch from "./EachSeach";

const SearchResults = ({ profiles }) => {
  return (
    <Container className="search-results  nav-arrange mt-2  ">
      {profiles && (
        <div>
          {profiles.slice(0, 14).map((profile) => (
            <Row key={profile._id}>
              <EachSearch profile={profile} />
            </Row>
          ))}
        </div>
      )}
    </Container>
  );
};
export default SearchResults;
