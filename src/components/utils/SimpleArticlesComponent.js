import React from 'react'

const SimpleArticlesComponent = ({ articles }) => {
  return (
    <div className="states articles-group">
      <div className="array-states articles">
        {articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <small className="author">Author: {article.author || 'unknown'}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimpleArticlesComponent
