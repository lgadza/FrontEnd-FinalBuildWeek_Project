import React, { useState } from "react";
import { Jumbotron, Row, Col, Dropdown } from "react-bootstrap";
import "../App.css";
import * as Icon from "react-bootstrap-icons";
import ModalComponent from "./ModalComponent";

const ExperienceSection = () => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClickEdit = () => setEditShow(true);
  const onClickBack = () => setEditShow(false);

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
        <div className="ImageDiv">
          <Icon.BarChartFill size={50} color="#9db3c8" />
        </div>
        <Col>
          <h6 className="m-0">React Native developer</h6>
          <p className="m-0 fontsize14">Eleconone . full-time</p>
          <p className="m-0 fontsize14 fontGray">Aug 2021 - Mar 2022 . 8 mos</p>
          <p className="m-0 fontsize14 fontGray">India</p>
          <p className="mt-1 fontsize14">
            <strong>Skill:</strong> Rest API . Git . React Native
          </p>
        </Col>
        {editShow && (
          <div className="pencilIcon" onClick={handleShow}>
            <Icon.Pencil color="#666666" size={22} className="mt-3 plusIcon" />
          </div>
        )}
      </Row>
      <ModalComponent visible={show} onhide={handleClose} />
    </Jumbotron>
  );
};

export default ExperienceSection;
