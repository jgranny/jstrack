const LocalStrategy = require('passport-local').Strategy;
const users = require('../../db/controllers/users.js');

module.exports = function(passport) {
  passport.use('signup', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    process.nextTick(function() {
      users.getUser(username)
        .then(user => {
          if (user) {
            return done(null, false);
          }
          return users.createUser(req.body.username, req.body.password);
        })
        .then(id => {
          return users.getUserById(id);
        })
        .then(newUser => {
          done(null, newUser);
        })
        .catch(err => {
          console.log('Signup Error: ', err);
          done(err);
        });
    });
  }));
};
