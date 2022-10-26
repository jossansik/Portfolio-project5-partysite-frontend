import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";

function PostCreateForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    category: id,
    tags: [],
  });
  const { title, content, image, category } = postData;
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const imageInput = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosReq.get("api/tags/?category=" + id);
      setTags(result.data.results);
    };

    fetchData().catch(console.error);
  }, [id]);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);
    formData.append("category", category);
    formData.append("tags", selectedTags);

    try {
      const { data } = await axiosReq.post("api/posts/", formData);

      navigate(`/posts/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Container>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Group
            as={Col}
            className="mb-3"
            controlId="my_multiselect_field"
          >
            <Form.Label>Select tags</Form.Label>
            {tags && tags.length > 0 && (
              <Form.Control
                as="select"
                multiple
                value={selectedTags}
                onChange={(e) =>
                  setSelectedTags(
                    [].slice
                      .call(e.target.selectedOptions)
                      .map((item) => item.value)
                  )
                }
              >
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.name}
                  </option>
                ))}
              </Form.Control>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="content"
              value={content}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="text-center mb-3">
            <Form.Control
              id="image-upload"
              type="file"
              onChange={handleChangeImage}
              ref={imageInput}
            />
          </Form.Group>
          {errors?.content?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Button className="btn btn-primary btn-lg float-end" type="submit">
            Create
          </Button>
          {errors?.image?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Container>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
