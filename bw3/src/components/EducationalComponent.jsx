import React, { useState } from "react";
import { Jumbotron, Row, Col, Dropdown } from "react-bootstrap";
import "../App.css";
import * as Icon from "react-bootstrap-icons";
import ModalEducation from "./ModalEducation";

const EducationSection = () => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClickEdit = () => setEditShow(true);
  const onClickBack = () => setEditShow(false);

  return (
    <Jumbotron className="my-2 py-2 top-profile-section bgWhite w-100">
      <Row className="heading ml-1">
        {editShow && (
          <div className="pencilIcon" onClick={onClickBack}>
            <Icon.ArrowLeft size={25} color="#000" />
          </div>
        )}
        <Col className="p-0">
          <h5>Educaton</h5>
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
              Add education
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="pencilIcon" onClick={onClickEdit}>
          <Icon.Pencil color="#666666" size={22} className="mt-3 plusIcon" />
        </div>
      </Row>
      <Row className="borderBottom my-auto d-flex  align-items-center">
        <div className="mr-4">
          <img
            className="school-logo"
            src="https://deep-care.de/wp-content/uploads/2022/01/KIT.png"
            alt=""
          />
        </div>
        <div>
          <h6 className="m-0">Karlsruhe University</h6>
          <p className="m-0 fontsize14">Management and HR</p>
          <p>Economist</p>
          <p className="m-0 fontsize14 fontGray">Sep 2013 - May 2016 </p>
          <p className="m-0 fontsize14 fontGray">Germany</p>
        </div>
        {editShow && (
          <div className="pencilIcon" onClick={handleShow}>
            <Icon.Pencil color="#666666" size={22} className="mt-3 plusIcon" />
          </div>
        )}
      </Row>
      <ModalEducation visible={show} onhide={handleClose} />
    </Jumbotron>
  );
};

export default EducationSection;
