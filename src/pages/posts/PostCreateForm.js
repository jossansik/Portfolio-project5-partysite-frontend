import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { Form, Button, Col, Container, Alert } from "react-bootstrap";

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
  const [categoryData, setCategoryData] = useState(null);

  const imageInput = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const [{ data: tags }, { data: categoryData }] = await Promise.all([
        axiosReq.get("api/tags/?category=" + id),
        axiosReq.get(`api/categories/${id}`),
      ]);
      setTags(tags?.results ?? []);
      setCategoryData(categoryData);
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
    <Col className="m-auto py-2 p-0 p-lg-2" md={6}>
      <Form onSubmit={handleSubmit}>
        <Container>
          <h2 className="mb-4">{categoryData?.name}</h2>
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
            <Form.Label>Description</Form.Label>
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
          {errors?.image?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Button className="btn btn-dark" type="submit">
            Create
          </Button>
        </Container>
      </Form>
    </Col>
  );
}

export default PostCreateForm;
