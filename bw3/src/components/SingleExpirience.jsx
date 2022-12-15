import * as Icon from "react-bootstrap-icons";

const SingleExpirience = ({ job }) => {
  return (
    <>
      <di v className="mb-3  d-flex mr-3 ">
        <div className="mr-3">
          <Icon.BarChartFill size={50} color="#9db3c8" />
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
      </di>

      <hr />
    </>
  );
};
export default SingleExpirience;
