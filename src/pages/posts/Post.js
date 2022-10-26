import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

const Post = (props) => {
  const {
    id,
    owner,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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

  return (
    <div className={styles.Post}>
      <div>
        <div className="align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
          </div>
        </div>
        {title && <div>TITLE: {title}</div>}
      </div>
      <Link to={`/posts/${id}`}>
        <Image src={image} alt={title} className="img-responsive" />
      </Link>
      <div>
        {content && <div>DESCRIPTION: {content}</div>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
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
