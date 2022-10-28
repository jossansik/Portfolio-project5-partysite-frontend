import React from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect.js";
import { Col } from "react-bootstrap";

const CategoryPage = () => {
  useRedirect("loggedOut");

  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [
        { data: categoryResult },
        { data: categoryTagsResult },
        { data: postsResult },
      ] = await Promise.all([
        axiosReq.get("api/categories/" + id),
        axiosReq.get("api/tags/?category=" + id),
        axiosReq.get("api/posts/?category=" + id),
      ]);
      setCategory(categoryResult);
      setTags(categoryTagsResult?.results ?? []);
      setPosts(postsResult?.results ?? []);
    };

    fetchData().catch(console.error);
  }, [id]);

  const addTag = (tagId) => {
    if (!selectedTags.includes(tagId)) {
      return setSelectedTags((prevTags) => [...prevTags, tagId]);
    }
  };

  const deleteTag = (tagId) => {
    const tagsFiltered = selectedTags.filter((tag) => {
      return tag !== tagId;
    });
    setSelectedTags(tagsFiltered);
  };

  useEffect(() => {
    const fetchData = async () => {
      const searchParamsArray = selectedTags.map((tag) => {
        return "&post_tags=" + tag;
      });

      const searchParams = searchParamsArray.join("");
      const url = "api/posts/?category=" + id + searchParams;
      const postsResult = await axiosReq.get(url);
      setPosts(postsResult?.data?.results ?? []);
    };

    fetchData().catch(console.error);
  }, [id, selectedTags]);

  return (
    <Col className="m-auto p-0 p-md-2" md={6}>
      {category && (
        <div>
          <h2>{category.name}</h2>
          <div>{category.description}</div>
        </div>
      )}
      <div className="d-flex align-content-start flex-wrap pt-2 pb-2">
        <span className="pe-2">Filter on tags:</span>
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => (
            <div key={tag.id} className="form-check form-switch pe-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={tag.id}
                onChange={() =>
                  selectedTags.includes(tag.id)
                    ? deleteTag(tag.id)
                    : addTag(tag.id)
                }
                value={tag.id}
              />
              <label className="form-check-label" htmlFor={tag.id}>
                {tag.name}
              </label>
            </div>
          ))}
      </div>
      {category && (
        <NavLink to={`/posts/create/${category.id}`}>
          <div className="mt-2 text-end">
            <Button className="btn btn-dark">New post +</Button>
          </div>
        </NavLink>
      )}
      <div className="row">
        {posts &&
          posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id} className="col-6">
              <div>Likes: {post.likes_count}</div>
              <div>Bookmark:</div>
              <NavLink to={`/posts/${post.id}`}>
                <Image
                  src={post.image}
                  className="img-responsive"
                  thumbnail={true}
                />
              </NavLink>
            </div>
          ))}
      </div>
    </Col>
  );
};

export default CategoryPage;
