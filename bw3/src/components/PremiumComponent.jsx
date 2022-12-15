import { Button, Card, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const Premium = () => {
  const profileData = useSelector((state) => state.profile.profileData);
  return (
    <Row className="mt-5 ">
      <Card className="frame">
        <Card.Body>
          <Card.Title className="d-flex justify-content-end f-14b">
            <span className="mr-auto">Add to your feed</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted f-14">
            <span style={{ color: "blue" }}>{profileData.name} </span>, unlock
            your full potential with LinkedIn Premium
          </Card.Subtitle>
          <Row className="justify-content-around px-4">
            <img
              className="circle user-profile-picture2"
              src={profileData.image}
              alt="profile"
            />
          </Row>

          <Card.Text className="mt-2">
            See who's view your profile in the last 90 days
          </Card.Text>
          <Button className="rd " variant="outline-warning">
            <span className="m-0 ml-auto py-0 px-2">Try for Free</span>
          </Button>
        </Card.Body>
      </Card>
    </Row>
  );
};
export default Premium;
