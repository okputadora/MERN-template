import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import User from '../../Components/User/User';
import Message from '../../Components/Message/Message';

import classes from './layout.css';
import image from './Assets/mern.png';
import api from '../../utils/apiRequests';

class Layout extends Component {
  state = {
    username: '',
    age: '',
    text: '',
  }

  componentWillMount() {
    // get a user and a message from the backend
    api.getUsers()
    .then(result => {
      const userInfo = result[0];
      this.setState({
        username: userInfo.username,
        age: userInfo.age
      })
    })

    api.getMessages()
    .then(result => {
      const messageInfo = result[0]
      this.setState({
        text: messageInfo.text
      })
    })
  }

  render() {
    return (
      <div className={classes.Layout}>
        <img className={classes.Image} src={image} alt="mern"/>
        <div className={classes.Content}>
          <User name={this.state.username} age={this.state.age} />
          <Message text={this.state.text} user={this.state.username} />
        </div>
      </div>
    )
  }
};

export default Layout;
