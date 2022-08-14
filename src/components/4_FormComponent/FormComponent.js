import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
/**
 *
 * Controlled Inputs
 *
 * we need to store the value of the input in the state of the component
 * so when the user types in the input, the value of the input is stored in the state
 */

const FormComponent = () => {
  //remember to set default values!
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  const [isPending, setIsPending] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    //store states into new object
    const newArticle = { title, body, author }

    setIsPending(true)

    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
      .then((res) => {
        setIsPending(false)
        return res.json()
      })
      .then((res) => {
        //redirect to new article
        navigate(`/post/${res.id}`)
      })
  }

  return (
    <div className="form form-create">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <select
            id="author"
            name="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="">Select an author</option>
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {isPending ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  )
}

export default FormComponent
