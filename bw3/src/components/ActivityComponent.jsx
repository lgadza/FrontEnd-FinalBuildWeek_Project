import { Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const Activity = () => {
  return (
    <Row className="my-2 py-2 top-profile-section bgWhite w-100 mx-auto ">
      <Row className="px-4 ">
        <div className="col-6 d-flex flex-column ">
          <h5 className="mb-0 ">
            <p>Activity</p>
          </h5>
          <a href="/" className="followers">
            400 Followers
          </a>
          <p className="mb-1 ">
            <p>You haven't posted lately</p>
          </p>
          <div className="mb-3 mt-2">
            Recent posts you share or comment on will be displayed here
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <div>
            <div className="startAPost d-flex  rounded-pill">
              <a href="/" className="mb-0 px-3 py-1 ">
                Start a post
              </a>
            </div>
          </div>
        </div>
      </Row>
      <Row className="border-top ml-2">
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <h6 className="mt-2 font-weight-700">
              Show all activities <ArrowRight />
            </h6>
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default Activity;
