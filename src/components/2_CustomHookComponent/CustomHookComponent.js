import React from 'react'
import { SimpleArticlesComponent } from '../utils/SimpleArticlesComponent'
import { useFetch } from '../useFetch'

const CustomHookComponent = () => {
  // we just import the custom hook and get what it returns by destructuring the object
  const {
    data: posts, //we can set a new name for this variable
    isPending,
    error
  } = useFetch('http://localhost:8080/posts')

  return (
    <div className="component">
      <h2>useEffect hook in promise</h2>
      <hr />
      {error && <div className="error">{error}</div>}
      {isPending && <h2>Loading...</h2>}
      {posts && <SimpleArticlesComponent articles={posts}></SimpleArticlesComponent>}
    </div>
  )
}

export default CustomHookComponent
