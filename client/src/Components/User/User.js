import React from 'react';
import classes from './user.css'
const user = props => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </div>
  )
}

export default user;
