import { Container, Badge, Button, Dropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";
import { getPostEdit } from "../Redux/actions";
import DeletePost from "./DetelePost";
import { deletePost } from "../Redux/actions";
import { getExperienceData } from "../Redux/actions/index";
import { current } from "@reduxjs/toolkit";

const Post = ({ visible, onhide, post, selectedPost, changeSelectedPost }) => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  const [query, setQuery] = useState("");
  const myProfile = useSelector((state) => state.profile.profileData);
  const [comment, setComment] = useState(false);
  const handleComment = () => {
    setComment(true);
  };
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const postId = post.user._id;
  const myId = myProfile._id;
  const [liked, setLiked] = useState(false);
  const handleLiked = () => {
    liked === false ? setLiked(true) : setLiked(false);
  };
  const count = 0;
  const [show, setShow] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseDelete = () => setDeletePost(false);
  const handleDelete = () => {
    dispatch(getPostEdit(post._id));
    setDeletePost(true);
    setDeleteClicked(true);
    changeSelectedPost(post._id);
  };
  const handleShow = () => {
    setShow(true);
    setClicked(true);
    dispatch(getPostEdit(post._id));
  };
  const handleExp = () => {
    dispatch(getExperienceData(post.user._id));
  };
  const getTime = (creationTime) => {
    let time = undefined;
    let ltr = new Date(creationTime);

    let cur = new Date();

    cur.getDate() - ltr.getDate() > 356
      ? (time = Math.round(new Date().getFullYear(creationTime) + " . yrs"))
      : cur.getMonth() - ltr.getMonth() >= 1
      ? (time =
          Math.round(cur.getMonth() - ltr.getMonth(creationTime)) + " . months")
      : cur.getDate() - ltr.getDate(creationTime) >= 1
      ? (time =
          Math.round(cur.getDate() - ltr.getDate(creationTime)) + " . days")
      : cur.getHours() - ltr.getHours() >= 1
      ? (time = Math.round(cur.getHours() - ltr.getHours()) + " . hrs")
      : (time = Math.round(cur.getMinutes() - ltr.getMinutes()) + " . mins");

    return time;
  };
  console.log(getTime(post.updatedAt));
  return (
    <div className="post-section my-2 w-100  mx-0 back-ground ">
      <div className="d-flex justify-content-start align-items-center p-2   ">
        <Link
          onClick={handleExp}
          className="remove-text-deco"
          to={`/user-profile/${post.user._id}`}
        >
          <div className="d-flex  align-items-center  ">
            <div>
              {post.user.image && (
                <img
                  className="create-post-image mr-2"
                  src={post.user.image}
                  alt=""
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
                <span className="text-muted">6,772 {"  "}followers</span>
              </div>
              <div>
                <span className="text-muted">
                  {/* {new Date().getDate(post.updatedAt)}.
                  {new Date().getMonth(post.updatedAt) + 1}.
                  {new Date().getFullYear(post.updatedAt)} */}
                  {getTime(post.updatedAt)}
                </span>
                <Icon.Dot />
                <Icon.GlobeEuropeAfrica size={15} className="mr-2" />
              </div>
            </div>
          </div>
        </Link>
        <div className="ml-auto ">
          <Dropdown className="my-dropdown ">
            <Dropdown.Toggle
              variant="success"
              className="back-ground "
              id="dropdown-basic"
            >
              <Icon.ThreeDots size={20} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <div className="d-flex align-items-center my-2">
                  <Icon.Bookmark className="mr-3 mb-3 my-auto" size={25} />

                  <span>Save</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className="my-2">
                  <Icon.Link45deg className="mr-3 mb-3 my-auto" size={25} />
                  <span>Copy link to post</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <div className="my-2">
                  <Icon.CodeSlash className="mr-3 mb-3 my-auto" size={25} />
                  <span>Embed this post </span>
                </div>
              </Dropdown.Item>
              {myId !== postId ? (
                <>
                  <Dropdown.Item href="#/action-1">
                    <div className="my-2">
                      <Icon.EyeSlashFill
                        className="mr-3 mb-3 my-auto"
                        size={25}
                      />
                      <span>I don't want to see this</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <div className="my-2">
                      <Icon.XCircleFill
                        className="mr-3 mb-3 my-auto"
                        size={25}
                      />
                      <span>
                        Unfollow {post.user.name} {post.user.surname}
                      </span>
                    </div>
                  </Dropdown.Item>

                  <Dropdown.Item href="#/action-1">
                    <div className="my-2">
                      <Icon.PersonFillX
                        className="mr-3 mb-3 my-auto"
                        size={25}
                      />
                      <span>
                        Remove connection with {post.user.name}{" "}
                        {post.user.surname}
                      </span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <div className="my-2">
                      <Icon.FlagFill className="mr-3 mb-3 my-auto" size={25} />
                      <span>Report post</span>
                    </div>
                  </Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item onClick={handleShow} href="#/action-1">
                    <div className="my-2">
                      <Icon.Pencil className="mr-3 mb-3 my-auto" size={25} />
                      <span>Edit</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleDelete}>
                    <div className="my-2">
                      <Icon.Trash3Fill
                        className="mr-3 mb-3 my-auto"
                        size={25}
                      />
                      <span>Delete post</span>
                    </div>
                  </Dropdown.Item>

                  <Dropdown.Item href="#/action-1">
                    <div className="my-2">
                      <Icon.ChatText className="mr-3 mb-3 my-auto" size={25} />
                      <span>Who can comment on this post?</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <div className="my-2">
                      <Icon.EyeFill className="mr-3 mb-3 my-auto" size={25} />
                      <span>Who can see this post?</span>
                    </div>
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="p-2">
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
        {post.image && (
          <img className="post-image  w-100" src={post.image} alt="" />
        )}
      </div>
      {liked && (
        <div className="ml-5">
          <Icon.HandThumbsUpFill color="blue" size={15} />
          <Badge bg="secondary">{count + 1}</Badge>
        </div>
      )}
      <div className="d-flex justify-content-between m-3 align-items-center">
        <div>
          <img
            className="profile-picture "
            src={myProfile.image}
            alt={myProfile.name}
          />
        </div>
        <div>
          {liked === true ? (
            <Icon.HandThumbsUpFill
              className="mr-2"
              color="blue"
              size={20}
              onClick={handleLiked}
            />
          ) : (
            <Icon.HandThumbsUp
              className="mr-2"
              size={20}
              onClick={handleLiked}
            />
          )}
          <span>Like</span>
        </div>
        <Link onClick={handleComment}>
          <Icon.ChatText className="mr-2 remove-text-deco" size={20} />
          <span className="remove-text-deco">Comment</span>
        </Link>
        <div>
          <Icon.Repeat className="mr-2" size={20} />
          <span>Repost</span>
        </div>
        <div>
          <Icon.SendFill className="mr-2" size={20} />
          <span>Send</span>
        </div>
      </div>
      {comment && (
        <div className="d-flex align-items-center mx-3">
          <div className="mr-4">
            <img
              className="profile-picture "
              src={myProfile.image}
              alt={myProfile.name}
            />
          </div>
          <div className="w-100 my-3 comment-input">
            <input
              className="comment-input w-100 d-block py-2 px-4"
              type="text"
              placeholder="Add acomment...."
              onChange={handleQuery}
            />
          </div>
          <div className="d-flex">
            <Icon.EmojiSmile className="mx-2" size={20} />
            <Icon.Image size={20} />
          </div>
        </div>
      )}
      {query && (
        <div className=" mx-5 mb-3">
          <Button variant="primary">Post</Button>
        </div>
      )}
      {clicked && (
        <CreatePost
          postTextId={post._id}
          clicked={clicked}
          profile={post}
          visible={show}
          onhide={handleClose}
        />
      )}
      {myId === postId ? (
        <DeletePost
          postTextId={post._id}
          clicked={deleteClicked}
          profile={myProfile}
          visible={deletePost}
          onhide={handleCloseDelete}
        />
      ) : (
        false
      )}
    </div>
  );
};
export default Post;
