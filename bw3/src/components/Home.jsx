import ProfilePage from "./ProfilePage";
import { Col, Container, Row } from "react-bootstrap";
import PostSection from "./PostSection";

const Home = () => {
  return (
    <Container className="mt-5  home-page">
      <Row>
        <Col md={3}>
          <ProfilePage />
        </Col>
        <Col md={6}>
          <PostSection />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
