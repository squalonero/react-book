import React, { useState, useEffect } from 'react'
import { SimpleArticlesComponent } from '../utils/SimpleArticlesComponent'

/**
 *
 * UseEffect() hook - side effects handler
 * 1.import useEffect from react
 * 2 UseEffect is called for every render cycle and re-render
 *      if no dependencies are passed, it will be called only once
 *      each time we update a state, a re-render is triggered and useEffect, too
 *      if we specify a dependency array, we can store states to watch for changes, and useEffect will be called when the state changes
 * 3. UseEffect is called after the component is mounted
 *
 */

const UseEffectPromiseComponent = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8080/posts')
        .then((res) => {
          if (!res.ok) throw Error('could not fetch the data - custom error')
          return res.json()
        })
        .then((data) => {
          //handle data
          setData(data)
          setIsPending(false)
        })
        .catch((err) => {
          // store error message in state
          setIsPending(false)
          setError(err.message)
        })
    }, 3000)
  }, [])

  return (
    <div className="component">
      <h2>useEffect hook in promise</h2>
      <hr />
      {error && <div className="error">{error}</div>}
      {isPending && <h2>Loading...</h2>}
      {data && <SimpleArticlesComponent articles={data}></SimpleArticlesComponent>}
    </div>
  )
}

export default UseEffectPromiseComponent
