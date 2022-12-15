import { Row, Col } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";

const Languages = () => {
  return (
    <Row className="ml-2 bgWhite ">
      <Col className=" pt-4  ">
        <Row className="px-4">
          <div className="col-6 d-flex flex-column align-items-start">
            <h5 className="mb-0">
              <p>Languages</p>
            </h5>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <Plus style={{ fontSize: "30px" }} className="mr-2" />
                <div className="editButtonDivThree d-flex justify-content-center align-items-center">
                  <Pencil style={{ fontSize: "15px" }} />
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row className="px-4">
          <Col className=" text-left">
            <p className="mb-0 font-weight-bold mt-3">Albanian</p>
            <p className="pb-2 border-bottom">Mother Tongue</p>
          </Col>
        </Row>
        <Row className="px-4">
          <Col className=" text-left">
            <p className="mb-0 font-weight-bold mt-2">English</p>
            <p className=" pb-2 border-bottom">fluent</p>
          </Col>
        </Row>
        <Row className="px-4">
          <Col className=" text-left">
            <p className="mb-0 font-weight-bold mt-2">German</p>
            <p>fluent</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Languages;
