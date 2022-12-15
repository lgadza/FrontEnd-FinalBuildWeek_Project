import { Button, Card, Col, Row } from "react-bootstrap";

const PeopleKnow = () => {
  return (
    <Row>
      <Card className="frame mt-2 w-100 mx-auto">
        <Card.Body className="mx-auto">
          <Card.Title className="d-flex">
            <h5>People you may know</h5>
          </Card.Title>
          <Row className="d-flex justify-content-around px-4 align-items-center">
            <img
              className="circle pr-2"
              id="circle"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="profile"
            />

            <span>Kajal Lathya</span>
          </Row>

          <Button className="rd" variant="outline-dark">
            <span className="m-0 py-0 px-2">
              <svg
                className="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
              Message
            </span>
          </Button>
        </Card.Body>

        <button
          class="btn show-btn border-top p-0 py-3"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <span>Show more</span>
        </button>
        <div class="collapse" id="collapseExample">
          <Card.Body>
            <Row className="justify-content-around px-4">
              <Col md={3} lg={3} className="p-0">
                <img
                  className="circle"
                  src="https://placekitten.com/50/50"
                  alt="profile"
                />
              </Col>
              <Col md={9} lg={9} className="pl-3">
                <Card.Text className="mb-2 text-muted f-14 row align-items-start">
                  <p className="m-0 f-14b" style={{ color: "red" }}>
                    Name LastName
                  </p>
                  <p className="m-0" style={{ color: "red" }}>
                    Job description
                  </p>
                </Card.Text>
              </Col>
            </Row>
            <Button className="rd" variant="outline-dark">
              <h5 className="m-0 py-1 px-2">Connect</h5>
            </Button>
          </Card.Body>
        </div>
      </Card>
    </Row>
  );
};
export default PeopleKnow;
