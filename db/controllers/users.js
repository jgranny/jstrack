const User = require('../models/users');
const bcrypt = require('bcrypt-nodejs');

let hashPassword = function (password) {
  return new Promise((fulfill, reject) => {
    bcrypt.hash(password, null, null, (err, hash) => {
      if (err) {
        return reject(err);
      }
      fulfill(hash);
    });
  });
};

module.exports = {

  authRes(req, res, next) {
    res.json({
      username: req.user.username,
      jobs: req.user.jobs,
      _id: req.user._id
    });
  },

  createUser(username, password) {
    return hashPassword(password)
    .then(hash => {
      return User.create({ username, password: hash })
      .then(user => user._id);
    });
  },

  editUser(req, res, next) {

  },

  deleteUser(req, res, next) {
    const user = req.params.userId;

    User.findByIdAndRemove({ _id: user })
      .then(user => res.status(204).send(user))
      .catch(next);
  },

  getUserById(userId) {
    return User.findOne({ _id: userId })
      .then(user => user);
  },

  getUser(username) {
    return User.findOne({ username: username })
      .then(user => user);
  },

  comparePassword(attempted, correct) {
    return new Promise((fulfill, reject) => {
      bcrypt.compare(attempted, correct, (err, res) => {
        if (err) {
          return reject(err);
        }

        fulfill(res);
      });
    });
  }

};
