import React from "react";
import { Image, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default function Promoted() {
  return (
    <Row className="    mt-2 ">
      <div className="d-flex justify-content-between mt-1 mb-0">
        <span className="ml-3"> Promoted</span>

        <Icon.ThreeDots className="mr-auto" size={20} />
      </div>
      <div className="d-flex ml-3 mr-3 align-items-center">
        <div className="promoted-logo-container">
          <Image
            src="https://media.licdn.com/dms/image/D4D0EAQFpxppPduLQzg/rightRail-logo-shrink_100_100/0/1666993752808?e=1671721200&v=beta&t=fNDQcjGUGdVuJjOuPl8w4oDXfOTghYSRwQZnJDFvAtQ"
            alt="verizon logo"
            className="promoted-logo"
          />
        </div>

        <div className="ml-2">
          <span>Invest and earn income from your assets.</span>
        </div>
        <span>
          <Icon.ArrowRight size={20} />
        </span>
      </div>
    </Row>
  );
}
