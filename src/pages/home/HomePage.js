import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import CloudImage from "../../assets/cloudy.webp";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [allCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("api/categories/");
      setCategories(result.data.results);
    };

    fetchData().catch(console.error);
  }, []);

  const showAllCategories = () => {
    setShowAllCategories(!allCategories);
  };

  const getCategories = () => {
    return allCategories ? categories : categories.slice(0, 3);
  };

  return (
    <Col className="m-auto py-2 p-0 p-lg-2" md={6}>
      <Image
        className="rounded mx-auto d-block img-responsive mb-2"
        src={CloudImage}
        alt={`Home image`}
      />
      {getCategories().map((category) => (
        <Row key={category.id}>
          <div className="text-center">
            <div test-id={`category_page_${category.id}`}>
              <h2>{category.name}</h2>
            </div>
            <NavLink to={`/categories/${category.id}`}>
              <Image
                className="rounded mx-auto d-block img-responsive"
                src={category.image}
                alt={`Category image ${category.id}`}
              />
            </NavLink>
          </div>
        </Row>
      ))}
      <Row>
        <div className="text-center mt-2">
          {allCategories ? (
            <Button className="btn btn-dark" onClick={showAllCategories}>
              SHOW TOP THEMES
            </Button>
          ) : (
            <Button className="btn btn-dark" onClick={showAllCategories}>
              SEE ALL THEMES
            </Button>
          )}
        </div>
      </Row>
    </Col>
  );
};

export default HomePage;
