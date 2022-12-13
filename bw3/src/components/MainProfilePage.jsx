import { Col, Container, Badge, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfilData } from "../Redux/actions/index";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import UserExperince from "./UserExperince";

const MainProfilePage = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.profileData);
  console.log(profileData.image);

  useEffect(() => {
    dispatch(getProfilData());
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
  return (
    <Container className="p-0 m-0 d-flex flex-column justify-content-center ml-auto mt-5">
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
                <Link to="/edit">
                  <Icon.Pencil size={25} className="edit-pencil" />
                </Link>
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
                    <p className="profile-views mt-4 mb-0 pb-0 ">
                      {profileData.area} <Icon.Dot />
                      <Link className="text-primary">Contact info</Link>
                    </p>
                    <p className="profile-views mt-4 mb-0 pb-0 ">
                      {
                        <Badge className="mr-3 followers" bg="info">
                          146
                        </Badge>
                      }
                      Followers
                      <Icon.Dot />
                      <Link className="text-primary">
                        {
                          <Badge className="mr-2 followers" bg="info">
                            100 +
                          </Badge>
                        }
                        connections
                      </Link>
                    </p>
                    <div className="d-flex align-items-center mt-4 ">
                      <div className="message-user  px-3 py-1 mr-3">
                        <span>Open to</span>
                      </div>
                      <div className="message-more px-4 py-1  mr-3 add-more-section">
                        <span>Add profile section</span>
                      </div>
                      <div className="message-more  px-4 py-1">
                        <span>More</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-4 mt-5">
                  <Link>
                    <p>University of Bialystok</p>
                  </Link>
                  <Link>
                    <p>University of Bialystok</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <UserExperince profileData={profileData} />
      </Row>
    </Container>
  );
};
export default MainProfilePage;
