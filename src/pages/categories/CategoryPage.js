import React from 'react'
import { axiosReq } from "../../api/axiosDefaults";
import { useEffect, useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
  const { id } = useParams()
  const [category, setCategory] = useState(null)
  const [tags, setTags] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const categoryResult = await axiosReq.get('api/categories/' + id)
      const categoryTagsResult = await axiosReq.get(
        'api/tags/?category=' + id,
      )
      setTags(categoryTagsResult?.data?.results ?? [])
      setCategory(categoryResult.data)
    }

    fetchData().catch(console.error)
  }, [id])

  return (
    <div>
      {category && (
        <div>
          <h2>
              {category.name}            
          </h2>
          <Image src={category.image} fluid={true} />
        </div>)}
      {tags &&
        tags.length > 0 &&
        tags.map((tag) => <Button key={tag.id}>{tag.name}</Button>)}
    </div>
  )
}

export default CategoryPage
