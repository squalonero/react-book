import React from 'react'

export const SimpleArticlesComponent = ({ articles }) => {
  return (
    <div className="states articles-group">
      <div className="array-states articles">
        {articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <small className="author">Author: {article.author}</small>
          </div>
        ))}
      </div>
    </div>
  )
}
