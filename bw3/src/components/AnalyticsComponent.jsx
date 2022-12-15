import { Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const AnalyticsComponent = () => {
  return (
    <Row className=" mx-auto my-2 py-2 top-profile-section bgWhite w-100">
      <div>
        <h5 className=" mb-2 ml-3 ">Analytics</h5>
        <div className="d-flex mb-2 col-4 ">
          <div className="mr-2">
            <Icon.EyeFill />
          </div>
          <div>Private to you</div>
        </div>
        <div className="d-flex cursor-on-hover">
          <div className="col-4 d-flex">
            <div className="mr-2">
              <Icon.PeopleFill />
            </div>
            <div>
              <div>12 profile views</div>
              <div>Discover who's viewed your profile.</div>
            </div>
          </div>
          <div className="col-4 d-flex ">
            <div className="mr-2">
              <Icon.Reception3 />
            </div>
            <div>
              <div>211 post impressions</div>
              <div>Check out who's engaginng with your posts.</div>
            </div>
          </div>
          <div className="col-4 d-flex ">
            <div className="mr-2">
              <Icon.Search />
            </div>
            <div>
              <div>22 search appearances</div>
              <div>See how often you appear on search results.</div>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default AnalyticsComponent;
