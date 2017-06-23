const assert = require('assert')
const User = require('../db/models/users')

describe('User model', () => {

  it('saves a user', done => {
    const joe = new User({ username: 'Joe' });

    joe.save()
      .then(() => {
        assert(!joe.isNew);
        done();
      });
  });

});
