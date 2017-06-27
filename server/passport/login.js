const LocalStrategy = require('passport-local');
const users = require('../../db/controllers/users.js');

module.exports = function(passport) {
  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    console.log('Req body: ', req.body);
    users.getUser(username)
      .then(user => {
        if (!user) {
          return done(null, false);
        }

        return users.comparePassword(password, user.password)
          .then(match => {
            if (match) {
              done(null, user);
            } else {
              done(null, false);
            }
          });
      })
      .catch(err => {
        console.log('Signup Error: ', err);
        done(err);
      });
  }));
};
