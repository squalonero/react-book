import React from 'react'

const ArticlesComponent = ({
  articles,
  deletedArticles,
  handleDelete,
  handleRestore
}) => {
  return (
    <div className="states articles-group">
      <div className="array-states articles">
        {articles.map((article) => (
          <div className="article" key={article.id}>
            <button
              className="action delete"
              type="button"
              onClick={() => handleDelete(article.id)}
            >
              x
            </button>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <small className="author">Author: {article.author}</small>
          </div>
        ))}
      </div>
      <div className="deleted-articles">
        <h6>Deleted</h6>
        {deletedArticles &&
          deletedArticles.map((article) => (
            <div className="deleted-article" key={article.id}>
              {article.title}
              <button
                className="action restore"
                type="button"
                onClick={() => handleRestore(article.id)}
              >
                ↢
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ArticlesComponent
