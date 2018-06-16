const db = require('../models');
const Promise = require('bluerbird');

module.exports = {
  get: () => {
    return new Promise((resolve, reject) => {
      db.User.findAll({})
      .then(users => {
        resolve(users)
      })
      .catch(err => {
        reject(err);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.User.findById(id)
      .then(user => {
        resolve(user);
      })
      .catch(err => {
        reject(err);
      });
    });
  },

  post: (params) => {
    return new Promise((resolve, reject) => {
      db.User.create({text: params.user, user: params.user})
      .then(user => {
        resolve(user)
      })
      .catch((err) => {
        reject(err)
      })
    })
  },

  update: (id, params) => {
    return new Promise((resolve, reject) => {
      db.User.findByIdAndUpdate(id, params)
      .then(user => {
        resolve(user);
      })
      .catch(err => {
        reject(err);
      })
    });
  },

  remove: (id) => {
    return new Promise((resolve, reject) => {
      db.User.findByIdAndDelete(id)
      .then(user => {
        resolve(user);
      })
      .catch(err => {
        reject(err);
      })
    })
  }
}