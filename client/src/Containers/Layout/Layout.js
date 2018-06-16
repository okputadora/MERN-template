import React, { Component } from 'react';
import User from '../../Components/User/User';
import Message from '../../Components/Message/Message';
import { Route, withRouter } from 'react-router-dom';
import classes from './layout.css';

class Layout extends Component {
  state = {
    userInfo: {},
    messageInfo: {},
  }

  componentWillMount() {
    // get a user and a message from the backend
    
  }

  render() {
    return (
      <div>
        <User name={username} age={age} />
        <Message text={} user={} />
      </div>
    )
  }
};
