import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Comment from "../comments/Comment.js";
import Post from "./Post";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentCreateForm from "../comments/CommentCreateForm";

function PostPage() {
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const [post, setPost] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`api/posts/${id}`),
          axiosReq.get(`api/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
        const categoryResult = await axiosReq.get(
          "api/categories/" + post.category
        );
        setCategory(categoryResult?.data);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <>
      <Col className="m-auto py-2 p-0 p-lg-2" md={6}>
        {category && <h3>{category.name}</h3>}
        {category?.category_tags &&
          category?.category_tags.map((item) => (
            <div key={item.id}># {item.name}</div>
          ))}
        <Post {...post.results[0]} setPosts={setPost} postPage />
        {currentUser ? (
          <CommentCreateForm
            profile_id={currentUser.profile_id}
            post={id}
            setPost={setPost}
            setComments={setComments}
          />
        ) : comments.results.length ? (
          "Comments"
        ) : null}
        {comments.results.length ? (
          comments.results.map((comment) => (
            <Comment
              key={comment.id}
              {...comment}
              setPost={setPost}
              setComments={setComments}
            />
          ))
        ) : (
          <div>No comments... yet</div>
        )}
      </Col>
    </>
  );
}

export default PostPage;
