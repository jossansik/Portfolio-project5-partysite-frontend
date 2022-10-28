import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Button, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

const Post = (props) => {
  const {
    id,
    owner,
    comments_count,
    likes_count,
    like_id,
    bookmarks_count,
    bookmark_id,
    title,
    content,
    image,
    updated_at,
    setPosts,
    bookmarkUnmarked,
    col,
  } = props;

  const currentUser = useCurrentUser();
  const navigate = useNavigate();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosReq.delete(`api/posts/${id}/`);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosReq.post("api/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                likes_count: post.likes_count + 1,
                like_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosReq.delete(`api/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                likes_count: post.likes_count - 1,
                like_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleBookmark = async () => {
    try {
      const { data } = await axiosReq.post("api/bookmarks/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                bookmarks_count: post.bookmarks_count + 1,
                bookmark_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnbookmark = async () => {
    try {
      await axiosReq.delete(`api/bookmarks/${bookmark_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                bookmarks_count: post.bookmarks_count - 1,
                bookmark_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
    bookmarkUnmarked();
  };

  return (
    <div className={col}>
      <div>
        <div className="row">
          <div className="col">
            <div className="align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span>{updated_at}</span>
              </div>
            </div>
            {title && <div>TITLE: {title}</div>}
          </div>
          {is_owner && (
            <div className="col text-end">
              <Button className="btn btn-dark" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
      <Link to={`/posts/${id}`}>
        <Image src={image} alt={title} className="img-responsive" />
      </Link>
      <div className="row mt-2 mb-4">
        {content && <div className="col">DESCRIPTION: {content}</div>}
        <div className="col text-end">
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          <span className="pe-2">{likes_count}</span>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't bookmark your own post!</Tooltip>}
            >
              <i className="far fa-bookmark" />
            </OverlayTrigger>
          ) : bookmark_id ? (
            <span onClick={handleUnbookmark}>
              <i className={`fas fa-bookmark`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleBookmark}>
              <i className={`far fa-bookmark`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          <span className="pe-2">{bookmarks_count}</span>
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </div>
    </div>
  );
};

export default Post;
