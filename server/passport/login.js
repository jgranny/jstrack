const LocalStrategy = require('passport-local');
const users = require('../../db/controllers/users.js');

module.exports = function(passport) {
  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    const userProps = req.body;

    users.getUser(userProps.username)
      .then(user => {
        if (!user) {
          return done(null, false);
        }

        return users.comparePassword(userProps.password, user.password)
          .then(match => {
            if (match) {
              console.log('Successful Login');
              done(null, user);
            } else {
              console.log('Unsuccessful Login :(');
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
