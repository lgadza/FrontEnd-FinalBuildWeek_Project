import * as Icon from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import PostExpirienceImage from "./PostExpirienceImage";

const SingleExpirience = ({ job }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="mb-3  d-flex mr-3 ">
        <div onClick={handleShow} className="mr-3">
          {job.image ? (
            <img src={job.image} className="exp-image" alt="" />
          ) : (
            <Icon.BarChartFill size={50} color="#9db3c8" />
          )}
        </div>
        <div>
          <h5 className="m-0">{job.role}</h5>
          <p className="m-0 fontsize14">{job.company} </p>
          <span className="m-0 text-muted">
            {new Date().getDate(job.startDate)}.
            {new Date().getMonth(job.startDate) + 1}.
            {new Date().getFullYear(job.startDate)} -{" "}
            {new Date().getDate(job.endDate)}.
            {new Date().getMonth(job.endDate) + 1}.
            {new Date().getFullYear(job.endDate)}
          </span>
          <p className="m-0 text-muted">{job.area}</p>
          <p className="mt-1 mt-4 ">
            <strong>Discription:</strong> {job.description}
          </p>
        </div>
      </div>
      <PostExpirienceImage
        visible={show}
        onhide={handleClose}
        userId={job.user}
        expId={job._id}
      />
      <hr />
    </>
  );
};
export default SingleExpirience;
