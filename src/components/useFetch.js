import { useEffect, useState } from 'react'
/**
 * custom hooks
 *  1. must start with the word "use" e.g. useState, useEffect
 *  2. You can build complex logic inside and return a value
 */

/**
 * ABORT CONTROLLER
 * we need to stop the useEffect when the component unmounts
 * e.g. when we change route
 *
 * We instantiate AbortController() class inside the useEffect hook
 * we pass it to the fetch() method as a parameter named 'signal'
 *
 */

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    //instantiate the abortController inside the useEffect
    const abortController = new AbortController()

    setTimeout(() => {
      fetch(
        url,
        { signal: abortController.signal } // pass the AbortController
      )
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
          //if we keep updating the states on error
          //the component will try to re-ender while unmounted
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            // store error message in state
            setIsPending(false)
            setError(err.message)
          }
        })
    }, 1000)

    // cleanup function - called when the component unmounts
    // just return a function inside the useEffect to perform a cleanup
    return () => abortController.abort()
  }, [url])

  return { data, isPending, error }
}
