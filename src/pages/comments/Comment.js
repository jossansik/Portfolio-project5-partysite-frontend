import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";

const Comment = (props) => {
  const { owner, updated_at, content, id, setPost, setComments } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosReq.delete(`api/comments/${id}/`);

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));

      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));
    } catch (err) {}
  };

  return (
    <div>
      <hr />
      <Card>
        <Card.Body className="ml-2">
          <div className="row">
            <div className="col">{owner}</div>
            <div className="col text-end">{updated_at}</div>
          </div>
          <p>{content}</p>
          {is_owner && (
            <Button className="btn btn-dark float-end" onClick={handleDelete}>
              Delete
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Comment;
