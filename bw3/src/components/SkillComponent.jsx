import React from "react";
import { Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function SkillComponent() {
  return (
    <Row className="  mx-auto my-2 py-2 top-profile-section bgWhite w-100">
      <Col className="mx-3">
        <div className="d-flex flex-column">
          <h5 className="mb-0 ">
            <p>Skills</p>
          </h5>

          <div className="mb-3 mt-2">
            <div>
              <p>Project Management</p>
            </div>
            <div>
              <p>Business Development</p>
            </div>
            <div>
              <p>SAP Seccessfactors</p>
            </div>

            <div className="col skills d-flex justify-content-end">
              <div className="startAPost d-flex  rounded-pill">
                <Link className="mb-0 px-3 py-2   ">Demonstrate Skill</Link>
              </div>
              <div>
                <Icon.Plus
                  color="#666666"
                  size={40}
                  className="mt-1 plusIcon"
                />
              </div>
              <div>
                <Icon.Pencil
                  color="#666666"
                  size={22}
                  className="mt-3 plusIcon"
                />
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
