import { useState } from 'react'
import ArticlesComponent from '../utils/ArticlesComponent'

/**
 *
 * Reactive variables useState() hook
 * 1.import useState from react
 * 2.declare tuple:: const [stateName, setStateName] = useState(initialValue)
 * 3. It is better to manage state and callbacks on a parent component, and pass everything as prop
 * to the child component that renders the list/object
 */

const StatesArrayComponent = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'foo', body: 'This is foo', author: 'lil angels' },
    { id: 2, title: 'bar', body: 'This is bar', author: 'er luce' },
    { id: 3, title: 'baz', body: 'This is baz', author: 'beluga' },
    { id: 4, title: 'lol', body: 'This is lol', author: 'er truce' }
  ])

  const [deletedArticles, setDeletedArticles] = useState([])

  const handleDelete = (id) => {
    const targetArticle = articles.find((a) => a.id === id)

    //this does not change the original data, but returns a brand new array
    const newArticles = articles.filter((a) => a.id !== id)
    //this changes the original data by replacing entirely
    setArticles(newArticles)

    /**
     * Simplified syntax
     *
     *   setArticles(articles.filter(a => a.id !== id))
     */

    setDeletedArticles([...deletedArticles, targetArticle])
  }

  const handleRestore = (id) => {
    const targetArticle = deletedArticles.find((a) => a.id === id)
    const newDeletedArticles = deletedArticles.filter((a) => a.id !== id)
    setArticles([...articles, targetArticle])
    setDeletedArticles(newDeletedArticles)
  }

  return (
    <div className="component">
      <h2>useState hook with Array</h2>
      <hr />
      <ArticlesComponent
        deletedArticles={deletedArticles}
        articles={articles}
        handleDelete={handleDelete}
        handleRestore={handleRestore}
      ></ArticlesComponent>
    </div>
  )
}

export default StatesArrayComponent
