const User = require('../models/users');

module.exports = {

  login(req, res, next) {

  },

  createUser(req, res, next) {
    const userProps = req.body;

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
  }

};
