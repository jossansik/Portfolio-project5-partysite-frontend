import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosReq.get("api/categories/");
      setCategories(result.data.results);
    }

    fetchData().catch(console.error);
  }, [])

  return (
    <div>
      <h2>PREPARE FOR FUN SCARES!</h2>
      {categories.map((category) => (
        <div className="row" key={category.id}>
          <div>{category.name}</div>
          <NavLink to={`/categories/${category.id}`}>
            <Image src={category.image} fluid={true} />
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default HomePage
