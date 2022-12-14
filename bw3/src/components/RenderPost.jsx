import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../Redux/actions/index";
import Post from "./Post";

const RenderPost = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.getPost.profileData);
  console.log(posts[0]);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <Col className="  mt-5 px-0">
      {posts && (
        <div>
          {posts
            .slice(posts.length - 50, posts.length)
            .reverse()
            .map((post) => (
              <Post key={post._id} post={post} />
            ))}
        </div>
      )}
    </Col>
  );
};
export default RenderPost;
