import { Row, ListGroup, Badge } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const ResourcesComponent = () => {
  const navigate = useNavigate();
  return (
    <Row className="mx-auto my-2 py-2 top-profile-section bgWhite w-100">
      <div className="   mx-3">
        <h5 className=" mb-0  font-weight-700 ">Resources</h5>
        <div className="d-flex mb-2 ">
          <div className="mr-2">
            <Icon.EyeFill />
          </div>
          <div>Private to you</div>
        </div>
        <div className=" ">
          <ListGroup variant="flush" className="px-0 text-left">
            <ListGroup.Item className="px-0 d-flex">
              <div className="mr-2 ">
                <Icon.BroadcastPin />
              </div>
              <div>
                <div className="d-flex ">
                  <div className="font-weight-700 mr-2">Creator mode</div>
                  <div className="off-badge-resources-comp d-flex align-items-center justify-content-center px-1">
                    <Badge>Off</Badge>
                  </div>
                </div>
                <div c>
                  Get discovered, showcase content on your profile and get
                  access to creator tools
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0 d-flex">
              <div className="mr-2">
                <Icon.PeopleFill />
              </div>
              <div className="cursor-on-hover">
                <div className="font-weight-700">My Network</div>
                <div>See and manage your connections and interests.</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="px-0 text-center pb-0">
              <div
                className="d-flex align-items-center justify-content-center"
                onClick={() => {
                  navigate("/details/resources");
                }}
              >
                <div className="cursor-on-hover">Show all 5 resources</div>
                <Icon.ArrowRight className=" ml-2 cursor-on-hover" />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </Row>
  );
};

export default ResourcesComponent;
