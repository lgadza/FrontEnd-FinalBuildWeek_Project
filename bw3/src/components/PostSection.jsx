import { Col, Button } from "react-bootstrap";
// import { Button } from "bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import { useSelector, useDispatch } from "react-redux";
import { getProfilData } from "../Redux/actions/index";

const PostSection = () => {
  const profileData = useSelector((state) => state.profile.profileData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfilData());
  }, []);
  return (
    <Col className="post-section px-5 mt-5 py-2 ">
      <div className="w-100">
        <img src="" alt="" />
        <Button
          onClick={handleShow}
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
      <CreatePost profile={profileData} visible={show} onhide={handleClose} />
    </Col>
  );
};
export default PostSection;
