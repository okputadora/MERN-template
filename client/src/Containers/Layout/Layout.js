import React, { Component } from 'react';
import User from '../../Components/User/User';
import Message from '../../Components/Message/Message';
import { Route, withRouter } from 'react-router-dom';
import classes from './layout.css';
import api from '../../utils/apiRequests';

class Layout extends Component {
  state = {
    userInfo: {},
    messageInfo: {},
  }

  componentWillMount() {
    // get a user and a message from the backend
    api.getUsers()
    .then(result => {
      this.setState({
        userInfo: result
      })
    })

    api.getMessage()
    .then(result => {
      this.setState({
        messageInfo: result
      })
    })
  }

  render() {
    const {name, age} = this.state.userInfo;
    const {text, user} = this.state.messageInfo;
    return (
      <div>
        <User name={name} age={age} />
        <Message text={text} user={user} />
      </div>
    )
  }
};

export default Layout;