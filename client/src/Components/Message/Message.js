import React from 'react';
import classes from './message.css';
const message = props => {
  return (
    <div>
      <div>{props.text}</div>
      <div>{props.user}</div>
    </div>
  )
}

export default message;
