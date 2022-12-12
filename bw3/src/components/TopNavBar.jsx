import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";
const TopNavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand className="d-flex align-items-center" to="#home">
          <Icon.Linkedin color="blue" size={40} />
          <div size={30} className="d-flex align-items-center ml-4 search-me ">
            <Icon.Search size={15} className="mx-3" />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 py-0"
                aria-label="Search"
              />
            </Form>
          </div>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <Icon.HouseDoor size={20} className="mx-3" />
              </div>
              <div>Home</div>
            </div>
          </Nav.Link>
          <Nav.Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <Icon.PeopleFill size={20} className="mx-3" />
              </div>
              <div>My Network</div>
            </div>
          </Nav.Link>
          <Nav.Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <Icon.BriefcaseFill size={20} className="mx-3" />
              </div>
              <div>Jobs</div>
            </div>
          </Nav.Link>
          <Nav.Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <Icon.ChatSquareDotsFill size={20} className="mx-3" />
              </div>
              <div>Messaging</div>
            </div>
          </Nav.Link>
          <Nav.Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <Icon.BellFill size={20} className="mx-3" />
              </div>
              <div>Notifications</div>
            </div>
          </Nav.Link>
          <Nav.Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <NavDropdown title="Me" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <Icon.BellFill size={20} className="mx-3" />
              </div>
              <div>Work</div>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default TopNavBar;
