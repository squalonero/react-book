import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../useFetch'
import { Link } from 'react-router-dom'

/**
 *
 * Grabbing route parameters
 *
 * 1. we need useParams hook, so let's import it
 */

const ParameterRouteComponent = () => {
  //grab the id from the route.
  //we defined this route with dynamic parameter in App.js
  const { id } = useParams()
  const {
    data: article,
    isPending,
    error
  } = useFetch(`http://localhost:8080/posts/${id}`)

  console.log(article)

  return (
    <div className="component">
      <Link to="/posts" className="back">
        <button type="button">Back</button>
      </Link>
      {error && <div className="error">{error}</div>}
      {isPending && <h2>Loading article...</h2>}
      {article && (
        <div className="article-detail">
          <h1 className="top-spacing">{article.title}</h1>
          <small>Author: {article.author || 'unknown'}</small>
          <p className="top-spacing">{article.body}</p>
        </div>
      )}
    </div>
  )
}

export default ParameterRouteComponent
