import Premium from "./PremiumComponent";
import Promoted from "./PromotedComponent";
import PeopleKnow from "./PeopleComponent";
import PeopleViewed from "./ViewComponent";

import "./sidebar.css";

const { Container, Row, Col } = require("react-bootstrap");

const SideBar = () => {
  return (
    <>
      <Premium />
      <PeopleViewed />
      <PeopleKnow />
      <Promoted />
    </>
  );
};
export default SideBar;
