import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const [category, setCategory] = useState();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`api/posts/${id}`),
        ]);
        setPost({ results: [post] });
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
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {category && <h3>{category.name}</h3>}
        {category?.category_tags &&
          category?.category_tags.map((item) => (
            <div key={item.id}># {item.name}</div>
          ))}
        <Post {...post.results[0]} setPosts={setPost} postPage />
      </Col>
    </Row>
  );
}

export default PostPage;
