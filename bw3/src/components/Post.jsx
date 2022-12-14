import { Container, Row, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { format, parse } from "date-fns";
import { useState, useEffect } from "react";
const Post = ({ visible, onhide, post }) => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="post-section my-2 w-100  mx-0 ">
      <div className="d-flex justify-content-start align-items-center p-2   ">
        <div className="d-flex  align-items-center  ">
          <div>
            {post.user.image && (
              <img
                className="create-post-image mr-2"
                src={post.user.image}
                alt="Louis"
              />
            )}
          </div>

          <div className="d-flex flex-column">
            <h6>
              {post.user.image && (
                <span>
                  {post.user.name}
                  {"  "} {post.user.surname}
                </span>
              )}
            </h6>
            <div>
              <span>6,772 {"  "}followers</span>
            </div>
            <div>
              <span>
                {new Date().getDate(post.updatedAt)}.
                {new Date().getMonth(post.updatedAt) + 1}.
                {new Date().getFullYear(post.updatedAt)}
              </span>
              <Icon.Dot />
              <Icon.GlobeEuropeAfrica size={15} className="mr-2" />
            </div>
          </div>
        </div>
        <div className="ml-auto ">
          <Icon.ThreeDots size={30} />
        </div>
      </div>
      <div className="p-2">
        {/* <p className="post-text">{post.text}</p> */}
        <p className="post-text">
          {showMore ? post.text : `${post.text.substring(0, 130)}`}
          {post.text.length > 130 && (
            <button
              className="my-btn"
              variant="outline-secondary"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "...Show less" : "...Show more"}
            </button>
          )}
        </p>
      </div>
      <div>
        {post.user.image && (
          <img
            className="post-image  w-100"
            src={post.user.image}
            alt="Louis"
          />
        )}
      </div>
    </div>
  );
};
export default Post;
