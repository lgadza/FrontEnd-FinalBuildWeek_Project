import { Col, Button } from "react-bootstrap";
// import { Button } from "bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import { useSelector, useDispatch } from "react-redux";
import { getProfilData } from "../Redux/actions/index";
import CreatePostTample from "./CreatePostTamplet";
import { Link } from "react-router-dom";

const PostSection = () => {
  const profileData = useSelector((state) => state.profile.profileData);
  const [show, setShow] = useState(false);
  const [showUpload, setUpLoadShow] = useState(false);
  const [showUploadVid, setUpLoadShowVid] = useState(false);
  const [showUploadJob, setUpLoadShowJob] = useState(false);
  const [showUploadArticle, setUpLoadShowArticle] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowUpLoad = () => setUpLoadShow(true);
  const handleShowUpLoadVid = () => setUpLoadShowVid(true);
  const handleShowUpLoadJob = () => setUpLoadShowJob(true);
  const handleShowUpLoadArticle = () => setUpLoadShowArticle(true);
  const handleCloseUpLoad = () => setUpLoadShow(false);
  const handleCloseUpLoadVid = () => setUpLoadShowVid(false);
  const handleCloseUpLoadJob = () => setUpLoadShowJob(false);
  const handleCloseUpLoadArticle = () => setUpLoadShowArticle(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfilData());
  }, []);
  return (
    <Col className="post-section px-5 mt-5 py-2 back-ground ">
      <div className="w-100 d-flex justify-content-between">
        <img
          src={profileData.image}
          className="profile-picture ml-auto mr-2"
          alt=""
        />
        <Button
          onClick={handleShow}
          className="w-100 post-btn py-3 text-start"
          variant="outline-dark"
        >
          Start a post
        </Button>
      </div>
      <div className="d-flex justify-content-between pt-2">
        <Link onClick={handleShowUpLoad}>
          <Icon.Image color="blue" size={25} className="mr-4" />
          <span>Photo</span>
        </Link>
        <Link onClick={handleShowUpLoadVid}>
          <Icon.PlayBtnFill color="green" size={25} className="mr-4" />
          <span>Video</span>
        </Link>
        <Link onClick={handleShowUpLoadJob}>
          <Icon.BriefcaseFill color="purple" size={25} className="mr-4" />
          <span>Job</span>
        </Link>
        <Link onClick={handleShowUpLoadArticle}>
          <Icon.LayoutTextWindowReverse
            color="orange"
            size={25}
            className="mr-4 article"
          />
          <span>Write article</span>
        </Link>
      </div>
      <CreatePost
        profile={profileData}
        visible={show}
        onhide={handleClose}
        clickedPost={true}
      />
      <CreatePostTample
        file="images"
        visible={showUpload}
        onhide={handleCloseUpLoad}
      />
      <CreatePostTample
        file="video"
        visible={showUploadVid}
        onhide={handleCloseUpLoadVid}
      />
      <CreatePostTample
        file="company"
        visible={showUploadJob}
        onhide={handleCloseUpLoadJob}
      />
      <CreatePostTample
        file="Article"
        visible={showUploadArticle}
        onhide={handleCloseUpLoadArticle}
      />
    </Col>
  );
};
export default PostSection;
