import { useEffect, useState } from 'react'
/**
 * custom hooks
 *  1. must start with the word "use" e.g. useState, useEffect
 */

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
  }, [url])

  return { data, isPending, error }
}
