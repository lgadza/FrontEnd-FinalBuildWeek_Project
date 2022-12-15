import React, { useState } from "react";
import { Jumbotron, Row, Col, Dropdown } from "react-bootstrap";
import "../App.css";
import * as Icon from "react-bootstrap-icons";
import ModalComponent from "./ModalComponent";
import { useSelector, useDispatch } from "react-redux";
import SingleExpirience from "./SingleExpirience";

const ExperienceSection = () => {
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState(undefined);
  const [editShow, setEditShow] = useState(false);
  const experiences = useSelector((state) => state.getExpirience.expienceData);
  const user = useSelector((state) => state.profile.profileData);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  console.log("currect expId", currentId);
  const onClickEdit = () => setEditShow(true);
  const onClickBack = () => setEditShow(false);
  console.log(user._id);
  return (
    <Jumbotron className="my-2 py-2 top-profile-section bgWhite w-100">
      <Row className="heading">
        {editShow && (
          <div className="pencilIcon" onClick={onClickBack}>
            <Icon.ArrowLeft size={25} color="#000" />
          </div>
        )}
        <Col className="p-0">
          <h5>Experience</h5>
        </Col>
        <Dropdown>
          <Dropdown.Toggle variant="" id="">
            <div className="pencilIcon">
              <Icon.Plus color="#666666" size={40} className="mt-1 plusIcon" />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={handleShow} className="fontsize14">
              <Icon.BriefcaseFill color="#666666" size={20} className="mr-3" />
              Add position
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="fontsize14">
              <Icon.Calendar2Date color="#666666" size={20} className="mr-3" />
              Add career break
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="pencilIcon" onClick={onClickEdit}>
          <Icon.Pencil color="#666666" size={22} className="mt-3 plusIcon" />
        </div>
      </Row>
      <Row className="borderBottom">
        <Col>
          {experiences.map((job) => (
            <>
              <div className="d-flex justify-content-between">
                <SingleExpirience job={job} />
                {editShow && (
                  <div
                    className="pencilIcon"
                    onClick={() => {
                      setShow(true);
                      console.log(job._id);
                      setCurrentId(job._id);
                    }}
                  >
                    <Icon.Pencil
                      color="#666666"
                      size={22}
                      className="mt-3 plusIcon"
                    />
                  </div>
                )}
              </div>
              <hr />
            </>
          ))}
        </Col>
        <ModalComponent visible={show} onhide={handleClose} expId={currentId} />
      </Row>
    </Jumbotron>
  );
};

export default ExperienceSection;
