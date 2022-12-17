import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../Redux/actions/index";
import Post from "./Post";

const RenderPost = () => {
  const [data, setData] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.getPost.profileData);
  console.log(posts);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <Col className="  mt-5 px-0 bgWhite">
      {posts && (
        <div>
          {posts
            .slice(0, 15)

            .map((post) => (
              <Post
                key={post._id}
                post={post}
                selectedPost={selectedPost}
                changeSelectedPost={(id) => setSelectedPost(id)}
              />
            ))}
        </div>
      )}
    </Col>
  );
};
export default RenderPost;
