import ProfilePage from "./ProfilePage";
import { Col, Container, Row } from "react-bootstrap";
import PostSection from "./PostSection";
import RenderPost from "./RenderPost";

const Home = () => {
  return (
    <Container className="mt-5  home-page">
      <Row>
        <Col md={3}>
          <ProfilePage />
        </Col>
        <Col md={6}>
          <PostSection />
          <RenderPost />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
