const login = require('./login');
const signup = require('./signup');

const users = require('../../db/controllers/users.js');

module.exports = function(passport) {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    users.getUserById(id)
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });

  login(passport);
  signup(passport);
};
