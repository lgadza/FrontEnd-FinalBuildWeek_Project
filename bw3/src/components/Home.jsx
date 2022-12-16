import ProfilePage from "./ProfilePage";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import PostSection from "./PostSection";
import RenderPost from "./RenderPost";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
const Home = () => {
  const showLoader = useSelector((state) => state.profiles.isLoading);
  console.log(showLoader);
  return (
    <Container className="mt-5  home-page">
      {showLoader && <Spinner animation="grow" />}
      <Row>
        <Col md={4} lg={3}>
          <ProfilePage />
        </Col>
        <Col md={8} lg={6}>
          <PostSection />
          <RenderPost />
        </Col>
        <Col lg={3} className="col-md-hide">
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
