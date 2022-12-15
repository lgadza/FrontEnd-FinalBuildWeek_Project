import { Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const AboutComponent = () => {
  return (
    <Row className=" mx-auto my-2 py-2 top-profile-section bgWhite w-100">
      <div className="mx-3">
        <div className="d-flex justify-content-between">
          <h5 className=" mb-0 font-weight-700">About</h5>
          <div>
            <Icon.Pencil />
          </div>
        </div>
        <p className=" mt-4 ">
          A well-versed, hard-working man who started a new life in Germany
          begins and a down-to-earth, practice-oriented work in a medium-sized
          company company is looking for. His varied work experience and his
          proactive involvement in the Politics gave him a deep understanding of
          (business) economics, politics and society to develop. Due to the
          contact with many different people, he is not only very open minded
          but also used to working together in teams, they for To inspire future
          visions and to successfully implement goals. He can also do a lot get
          down to business and get the job done reliably.
        </p>
      </div>
    </Row>
  );
};

export default AboutComponent;
