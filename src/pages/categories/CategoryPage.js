import React from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect.js";

const CategoryPage = () => {
  useRedirect("loggedOut");
  
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoryResult = await axiosReq.get("api/categories/" + id);
      const categoryTagsResult = await axiosReq.get("api/tags/?category=" + id);
      const postsResult = await axiosReq.get("api/posts/?category=" + id);
      setTags(categoryTagsResult?.data?.results ?? []);
      setCategory(categoryResult.data);
      setPosts(postsResult?.data?.results ?? []);
    };

    fetchData().catch(console.error);
  }, [id]);

  return (
    <div>
      {category && (
        <div>
          <h2>{category.name}</h2>
          <div>{category.description}</div>
        </div>
      )}
      {tags &&
        tags.length > 0 &&
        tags.map((tag) => <Button key={tag.id}>{tag.name}</Button>)}
      {category && (
        <NavLink to={`/posts/create/${category.id}`}>
          <div className="mt-2">
            <Button>New post</Button>
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
    </div>
  );
};

export default CategoryPage;
