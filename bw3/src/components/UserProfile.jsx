import { Col, Badge, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfilData } from "../Redux/actions/index";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import { getSomeoneProfilData } from "../Redux/actions/index";
import { getProfilDataExpereince } from "../Redux/actions/index";
import ContactInfo from "./ContactInfo";
import { getExperienceData } from "../Redux/actions/index";

const UserProfile = () => {
  const params = useParams();
  console.log("params", params.userId);
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.profileData);

  const userProfileData = useSelector(
    (state) => state.someoneProfile.profileData
  );
  const [showContactInfo, setShowContactInfo] = useState(false);

  const experince = useSelector((state) => state.userExperiences.profileData);
  console.log(experince);
  useEffect(() => {
    dispatch(getSomeoneProfilData(params.userId));
    dispatch(getProfilData());
    dispatch(getProfilDataExpereince(userProfileData._id));
    dispatch(getExperienceData(userProfileData._id));
  }, [params]);
  const myStyle = {
    backgroundImage: `url(${userProfileData.image})`,
    height: "25vh",
    width: "20%",
    marginTop: "0px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };
  const handleShowContactInfo = () => setShowContactInfo(true);
  const handleCloseContactInfo = () => setShowContactInfo(false);
  return (
    <Container className="p-0 m-0 d-flex flex-column justify-content-center ml-auto mt-5">
      <Row>
        <Col md={9} className="mt-5  back-ground px-0">
          {userProfileData && (
            <div className="top-profile-section">
              <div style={myStyle} className="mx-auto w-100 px-3 m-0 ">
                <Link className="position-image">
                  <img
                    className=" user-profile-picture mt-5  "
                    src={userProfileData.image}
                    alt={userProfileData.username}
                  />
                  <Icon.RecordCircleFill
                    className="record-online"
                    size={25}
                    color="green"
                  />
                </Link>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="px-3 pb-4 mt-5">
                    <Link>
                      <h5>
                        {userProfileData.name}
                        {"  "}
                        {userProfileData.surname}
                      </h5>
                    </Link>
                    <h6>{userProfileData.title} </h6>
                    <p className="mt-4 mb-0 pb-0 ">
                      {userProfileData.area} <Icon.Dot />
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
                      <div className="message-user  px-3 py-1 mr-3">
                        <span>
                          <Icon.SendFill className="mr-2" />
                          Message
                        </span>
                      </div>
                      <div className="message-more px-4 py-1">
                        <span>More</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-4 mt-5">
                  {experince.length !== 0
                    ? experince.slice(0, 3).map((exp) => (
                        <div className="mb-3  d-flex mr-3 align-items-center ">
                          <div className="mr-3">
                            {exp.image ? (
                              <img
                                src={exp.image}
                                className="exp-image"
                                alt=""
                              />
                            ) : (
                              <Icon.BarChartFill size={50} color="#9db3c8" />
                            )}
                          </div>
                          <Link>
                            <p>{exp.company}</p>
                          </Link>
                        </div>
                      ))
                    : false}
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
      <ContactInfo
        visible={showContactInfo}
        onhide={handleCloseContactInfo}
        profile={userProfileData}
      />
    </Container>
  );
};
export default UserProfile;
