import { Col, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfilData } from "../Redux/actions/index";

const ProfilePage = () => {
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
    height: "10vh",
    width: "20%",
    marginTop: "0px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Col md={3} style={myStyle}>
      {profileData && (
        <div className="mx-auto">
          <img
            className="profile-picture"
            src={profileData.image}
            alt={profileData.username}
          />
          <h5>
            {profileData.name}
            {"  "}
            {profileData.surname}
          </h5>
          <h6>{profileData.title} </h6>
          <p className="profile-views mt-4 mb-0 pb-0">
            Who's viewed your profile {<Badge bg="info">I46</Badge>}
          </p>
          <p className="profile-views">
            Impressions of your post {<Badge bg="info">100</Badge>}
          </p>
        </div>
      )}
    </Col>
  );
};
export default ProfilePage;
