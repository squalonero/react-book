import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../useFetch'

const RouterArticlesComponent = () => {
  const {
    data: articles, //we can set a new name for this variable
    isPending,
    error
  } = useFetch('http://localhost:8080/posts')

  return (
    <div className="states articles-group">
      <div className="array-states articles">
        {error && <div className="error">{error}</div>}
        {isPending && <h2>Loading...</h2>}
        {articles &&
          articles.map((article) => (
            <div className="article" key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
              {/**
               * We can use Link component to create a dynamic link to a parameter route.
               */}
              <Link to={`/post/${article.id}`} className="action readmore">
                <button type="button">Read more</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default RouterArticlesComponent
