import { Col, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfilData } from "../Redux/actions/index";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

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
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };
  return (
    <Col md={3} className="mt-5 pt-4">
      {profileData && (
        <div className="top-profile-section">
          <div style={myStyle} className="mx-auto w-100 px-3 m-0 ">
            <Link>
              <img
                className="profile-picture  mt-5 "
                src={profileData.image}
                alt={profileData.username}
              />
            </Link>
          </div>
          <div className="px-3 pb-4 mt-5">
            <Link>
              <h5 className="text-center">
                {profileData.name}
                {"  "}
                {profileData.surname}
              </h5>
            </Link>
            <h6 className="text-center">{profileData.title} </h6>
            <p className="profile-views mt-4 mb-0 pb-0 text-center">
              Who's viewed your profile{" "}
              {
                <Badge className="ml-4" bg="info">
                  146
                </Badge>
              }
            </p>
            <p className="profile-views text-center">
              Impressions of your post{" "}
              {
                <Badge className="ml-4" bg="info">
                  100
                </Badge>
              }
            </p>
            <span className="profil-premium-info d-block">
              Access exclusive tools & insights
            </span>
            <div className="d-flex align-items-center">
              <Icon.SquareHalf
                classaName="mr-2"
                size={15}
                color="rgb(203, 156, 16)"
              />
              <Link
                to="https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F&upsellOrderOrigin=premium_homepage_identity_upsell"
                className="profile-views try-premium pl-2"
              >
                Try Premium for free
              </Link>
            </div>
            <div className="d-flex align-items-center  mt-4">
              <Icon.BookmarkFill size={15} />
              <Link
                to="https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F&upsellOrderOrigin=premium_homepage_identity_upsell"
                className="profile-views pl-2 my-items"
              >
                My items
              </Link>
            </div>
          </div>
        </div>
      )}
    </Col>
  );
};
export default ProfilePage;
