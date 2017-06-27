const User = require('../models/users');

module.exports = {

  login(req, res, next) {

  },

  createUser(userProps, next) {
    User.create(userProps)
      .then(user => res.send(user))
      .catch(next);
  },

  editUser(req, res, next) {

  },

  deleteUser(req, res, next) {
    const user = req.params.userId;

    User.findByIdAndRemove({ _id: user })
      .then(user => res.status(204).send(user))
      .catch(next);
  },

  getUserById() {

  },

  getUser() {

  },



};
