import React from 'react'

const SingleUser = (props) => {
  return (
    <div>
        <p>{props.name} is {props.age} years old</p>
    </div>
  )
}

export default SingleUser