import React from 'react'
import { axiosReq } from "../../api/axiosDefaults";
import { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  const [categories, setCategories] = useState([])
  const [allCategories, setShowAllCategories] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosReq.get('api/categories/')
      setCategories(result.data.results)
    }

    fetchData().catch(console.error)
  }, [])

  const showAllCategories = () => {
    setShowAllCategories(!allCategories)
  }

  const getCategories = () => {
    return allCategories ? categories : categories.slice(0, 3)
  }

  return (
    <div>
      <h2 className='text-center'>PREPARE FOR FUN SLARES!</h2>
      {getCategories().map((category) => (
        <div className="row" key={category.id}>
          <div className='text-center'>
          <div>{category.name}</div>
          <NavLink to={`/categories/${category.id}`}>
            <Image className='rounded mx-auto d-block' src={category.image} fluid={true} />
          </NavLink></div>
        </div>
      ))}
      <div className="row">
        <div className="text-center">
          {allCategories ? (
            <button onClick={showAllCategories}>
              SHOW TOP THEMES
            </button>
          ) : (
            <button onClick={showAllCategories}>
              SEE ALL THEMES
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage
