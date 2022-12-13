import { Col, Button } from "react-bootstrap";
// import { Button } from "bootstrap";
import * as Icon from "react-bootstrap-icons";

const PostSection = () => {
  return (
    <Col className="post-section px-5 mt-5 py-2 ">
      <div className="w-100">
        <img src="" alt="" />
        <Button
          className="w-100 post-btn py-3 text-start"
          variant="outline-dark"
        >
          Start a post
        </Button>
      </div>
      <div className="d-flex justify-content-between pt-2">
        <div>
          <Icon.Image color="blue" size={25} className="mr-4" />
          <span>Photo</span>
        </div>
        <div>
          <Icon.PlayBtnFill color="green" size={25} className="mr-4" />
          <span>Video</span>
        </div>
        <div>
          <Icon.BriefcaseFill color="purple" size={25} className="mr-4" />
          <span>Job</span>
        </div>
        <div>
          <Icon.LayoutTextWindowReverse
            color="orenge"
            size={25}
            className="mr-4 article"
          />
          <span>Write article</span>
        </div>
      </div>
    </Col>
  );
};
export default PostSection;