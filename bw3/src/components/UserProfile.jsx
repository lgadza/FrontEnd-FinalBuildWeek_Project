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

  console.log(userProfileData);
  const experince = useSelector((state) => state.userExperiences.profileData);

  useEffect(() => {
    dispatch(getSomeoneProfilData(params.userId));
    dispatch(getProfilData());
    dispatch(getProfilDataExpereince(userProfileData._id));
  }, []);
  const myStyle = {
    backgroundImage:
      "url('https://improvephotography.com/wp-content/uploads/2017/07/DSCF5660-Edit-1.jpg')",
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
      <ContactInfo
        visible={showContactInfo}
        onhide={handleCloseContactInfo}
        profile={userProfileData}
      />
    </Container>
  );
};
export default UserProfile;
