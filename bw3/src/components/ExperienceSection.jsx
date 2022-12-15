import React, { useState } from "react";
import { Jumbotron, Row, Col, Dropdown } from "react-bootstrap";
import "../App.css";
import * as Icon from "react-bootstrap-icons";
import ModalComponent from "./ModalComponent";
import { useSelector, useDispatch } from "react-redux";

const ExperienceSection = () => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const experiences = useSelector((state) => state.getExpirience.expienceData);
  console.log(experiences);
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
        <Col>
          {experiences.map((job) => (
            <>
              <div className="d-flex justify-content-between">
                <di v className="mb-3  d-flex mr-3 ">
                  <div className="mr-3">
                    <Icon.BarChartFill size={50} color="#9db3c8" />
                  </div>
                  <div>
                    <h5 className="m-0">{job.role}</h5>
                    <p className="m-0 fontsize14">{job.company} </p>
                    <span className="m-0 text-muted">
                      {new Date().getDate(job.startDate)}.
                      {new Date().getMonth(job.startDate) + 1}.
                      {new Date().getFullYear(job.startDate)} -{" "}
                      {new Date().getDate(job.endDate)}.
                      {new Date().getMonth(job.endDate) + 1}.
                      {new Date().getFullYear(job.endDate)}
                    </span>
                    <p className="m-0 text-muted">{job.area}</p>
                    <p className="mt-1 mt-4 ">
                      <strong>Discription:</strong> {job.description}
                    </p>
                  </div>
                </di>
                {editShow && (
                  <div className="pencilIcon" onClick={handleShow}>
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
      </Row>
      <ModalComponent visible={show} onhide={handleClose} />
    </Jumbotron>
  );
};

export default ExperienceSection;
