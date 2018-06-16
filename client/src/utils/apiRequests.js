import axios from 'axios';
import Promise from 'bluebird';

export default {
  getMessages: () => {
    return new Promise((resolve, reject) => {
      axios.get('/api/message')
      .then(response => {
        console.log(response)
        resolve(response.data.results)
      })
      .catch(err => {
        reject(err)
      })
    })
  },

  postMessage: (message) => {
    return new Promise((resolve, reject) => {
      axios.post('/api/message', message)
      .then(response => {
        resolve(response.data.result)
      })
      .catch(err => {
        reject(err)
      })
    })
  },

  getUsers: () => {
    console.log("getting users")
    return new Promise((resolve, reject) => {
      axios.get('/api/user')
      .then(response => {
        console.log("Got users");
        resolve(response.data.results);
      })
      .catch(err => {
        console.log("ERROR: ", err)
        reject(err);
      });
    });
  },

  postUser: (user) => {
    return new Promise((resolve, reject) => {
      axios.post('/api/user', user)
      .then(response => {
        resolve(response.data.results);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
}
