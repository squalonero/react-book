import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundComponent = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>The content you are looking does not exists.</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default NotFoundComponent
