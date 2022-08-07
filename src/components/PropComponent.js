import React from 'react'

export const PropComponent = ({type, classes, text}) => {
  return (
    <div className="component">
        <h2>Example prop component</h2>
        <button type={type} className={classes.join(' ')}>{text}</button>
    </div>
  )
}
