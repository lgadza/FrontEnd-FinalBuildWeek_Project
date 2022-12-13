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
import SearchResults from "./SearchResuts";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getMuiltiProfileData } from "../Redux/actions";

const TopNavBar = () => {
  const [isMyInputFocused, setIsMyInputFocused] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.profileData);

  const filteredProfiles = profiles.filter(
    (user) => user.name.includes(query) || user.surname.includes(query)
  );

  console.log(query);
  useEffect(() => {
    dispatch(getMuiltiProfileData());
  }, []);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted ✅");
  };

  return (
    <Navbar bg="light" variant="light" className="my-navBar">
      <Container className=" nav-arrange ">
        <Navbar.Brand className="d-flex fix-width " to="#home">
          <Icon.Linkedin color="blue" size={40} />
          <div>
            <div
              size={30}
              className="d-flex align-items-center ml-4 search-me "
            >
              <Icon.Search size={15} className="mx-3" />
              <Form onSubmit={handleSubmit} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 py-0"
                  aria-label="Search"
                  value={query}
                  onChange={handleChange}
                  onFocus={() => setIsMyInputFocused(true)}
                  onBlur={() => setIsMyInputFocused(false)}
                />
              </Form>
            </div>
            {isMyInputFocused && (
              <SearchResults
                profiles={filteredProfiles}
                className="top-z-index"
              />
            )}
          </div>
        </Navbar.Brand>
        <Nav className="me-auto fix-width ">
          <Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <Icon.HouseDoor size={20} className="mx-3" />
              </div>
              <div>Home</div>
            </div>
          </Link>
          <Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column mx-2">
              <div>
                <Icon.PeopleFill size={20} className="mx-3" />
              </div>
              <div>My Network</div>
            </div>
          </Link>
          <Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <Icon.BriefcaseFill size={20} className="mx-3" />
              </div>
              <div>Jobs</div>
            </div>
          </Link>
          <Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column mx-2">
              <div>
                <Icon.ChatSquareDotsFill size={20} className="mx-3" />
              </div>
              <div>Messaging</div>
            </div>
          </Link>
          <Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <Icon.BellFill size={20} className="mx-3" />
              </div>
              <div>Notifications</div>
            </div>
          </Link>
          <Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column mx-2">
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
          </Link>

          <Link to="/home">
            <div className="d-flex align-items-center justfy-content-center flex-column">
              <div>
                <Icon.BellFill size={20} className="mx-3" />
              </div>
              <div>Work</div>
            </div>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default TopNavBar;
