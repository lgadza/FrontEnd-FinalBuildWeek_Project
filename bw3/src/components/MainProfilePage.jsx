import { Col, Container, Badge, Row, Button, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfilData } from "../Redux/actions/index";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import UserExperince from "./UserExperince";
import ExperienceSection from "./ExperienceSection";
import EditIntro from "./EditIntro";
import AddToProfile from "./AddToProfile";
import ContactInfo from "./ContactInfo";
import { getProfilDataExpereince } from "../Redux/actions/index";
import AnalyticsComponent from "./AnalyticsComponent";
import ResourcesComponent from "./ResourcesComponent";
import AboutComponent from "./AboutComponent";
import EducationSection from "./EducationalComponent";
import SkillComponent from "./SkillComponent";
import Footer from "./FooterComponent";
import Activity from "./ActivityComponent";

const MainProfilePage = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.profileData);
  console.log(profileData.image);
  const experince = useSelector((state) => state.userExperiences.profileData);
  console.log(experince);
  console.log("userId", profileData._id);

  useEffect(() => {
    dispatch(getProfilData());
    dispatch(getProfilDataExpereince(profileData._id));
  }, []);
  const myStyle = {
    backgroundImage:
      "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: "25vh",
    width: "20%",
    marginTop: "0px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };
  const [show, setShow] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showAddProfile, setShowAddProfile] = useState(false);
  console.log(show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowAddProfile = () => setShowAddProfile(true);
  const handleCloseAddProfile = () => setShowAddProfile(false);
  const handleShowContactInfo = () => setShowContactInfo(true);
  const handleCloseContactInfo = () => setShowContactInfo(false);

  return (
    <Container
      fluid
      className="p-0 m-0 d-flex flex-column justify-content-center ml-auto mt-5"
    >
      <Container>
        <Row>
          <Col md={9} className="mt-5  back-ground px-0">
            {profileData && (
              <div className="top-profile-section">
                <div style={myStyle} className="mx-auto w-100 px-3 m-0 ">
                  <Link className="position-image">
                    <img
                      className=" user-profile-picture mt-5  "
                      src={profileData.image}
                      alt={profileData.username}
                    />
                    <Icon.RecordCircleFill
                      className="record-online"
                      size={25}
                      color="green"
                    />
                  </Link>
                  <Link className="edit-pencil" onClick={handleShow}>
                    <Icon.Pencil color="#666666" size={22} />
                  </Link>
                  {/*<Link to="/edit">
                  <Icon.Pencil size={25} className="edit-pencil" />
                </Link> */}
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <div className="px-3 pb-4 mt-5">
                      <Link>
                        <h5>
                          {profileData.name}
                          {"  "}
                          {profileData.surname}
                        </h5>
                      </Link>
                      <h6>{profileData.title} </h6>
                      <p className=" mt-4 mb-0 pb-0 ">
                        {profileData.area} <Icon.Dot />
                        <Link
                          onClick={handleShowContactInfo}
                          className="text-primary"
                        >
                          Contact info
                        </Link>
                      </p>
                      <p className=" mt-4 mb-0 pb-0 ">
                        {
                          <Badge className="mr-3 followers" bg="info">
                            146
                          </Badge>
                        }
                        Followers
                        <Icon.Dot />
                        <Link className="text-primary">
                          {
                            <Badge className="mr-2 " bg="info">
                              100 +
                            </Badge>
                          }
                          connections
                        </Link>
                      </p>
                      <div className="d-flex align-items-center mt-4 ">
                        <Dropdown>
                          <Dropdown.Toggle variant="" id="">
                            <Link className="message-user  px-3 py-1 mr-3">
                              <span className="text-white">Open to</span>
                            </Link>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item
                              href="#"
                              onClick={handleShow}
                              className="fontsize14"
                            >
                              <h6>Finding a new job</h6>
                              <span>
                                Show recruiters and others that you’re Open to
                                work
                              </span>
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              className="fontsize14"
                            >
                              <h6>Hiring</h6>
                              <span>
                                Share that you’re hiring and attract qualified
                                candidates Providing services
                              </span>
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              className="fontsize14"
                            >
                              <h6>Providing services</h6>
                              <span>
                                Showcase services you offer so new clients can
                                discover you
                              </span>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Link
                          // to="/add-profile-section"
                          onClick={handleShowAddProfile}
                          className="message-more px-4 py-1  mr-3 add-more-section"
                        >
                          <span>Add profile section</span>
                        </Link>

                        <Dropdown>
                          <Dropdown.Toggle variant="" id="">
                            <Link className="message-more  px-4 py-1">
                              <span>More</span>
                            </Link>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item
                              href="#"
                              onClick={handleShow}
                              className="fontsize14"
                            >
                              <Icon.Arrow90degRight
                                color="#666666"
                                size={20}
                                className="mr-3 mb-1"
                              />
                              Send profile in a message
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              className="fontsize14"
                            >
                              <Icon.Download
                                color="#666666"
                                size={20}
                                className="mr-3 mb-1"
                              />
                              Save to PDF
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              className="fontsize14"
                            >
                              <Icon.FileEarmarkText
                                color="#666666"
                                size={20}
                                className="mr-3 mb-1"
                              />
                              Build resume
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              className="fontsize14"
                            >
                              <Icon.InfoSquareFill
                                color="#666666"
                                size={20}
                                className="mr-3 mb-1"
                              />
                              About this profile
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 pb-4 mt-5">
                    {experince.length !== 0 ? (
                      <>
                        <Link>
                          <p>University of Bialystok</p>
                        </Link>
                        <Link>
                          <p>University of Bialystok</p>
                        </Link>
                      </>
                    ) : (
                      false
                    )}
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>

        <Row>
          <Col md={9} className="px-0">
            <AnalyticsComponent />
          </Col>
        </Row>
        <Row>
          <Col md={9} className="px-0">
            <ResourcesComponent />
          </Col>
        </Row>
        <Row>
          <Col md={9} className="px-0">
            <AboutComponent />
          </Col>
        </Row>
        <Row>
          <Col md={9} className="px-0">
            <Activity />
          </Col>
        </Row>
        <Row>
          <Col md={9} className="px-0">
            <ExperienceSection />
          </Col>
        </Row>
        <Row>
          <Col md={9} className="px-0">
            <EducationSection />
          </Col>
        </Row>
        <Row>
          <Col md={9} className="px-0">
            <SkillComponent />
          </Col>
        </Row>

        <EditIntro visible={show} onhide={handleClose} />
        <AddToProfile visible={showAddProfile} onhide={handleCloseAddProfile} />
        <ContactInfo
          visible={showContactInfo}
          onhide={handleCloseContactInfo}
          profile={profileData}
        />
      </Container>
      <Container className=" mb-5 px-0 mx-auto ">
        <Footer />
      </Container>
    </Container>
  );
};
export default MainProfilePage;
