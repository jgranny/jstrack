const assert = require('assert')
const User = require('../models/users')

describe('Users', () => {
  it('saves a user', (done) => {

    const joe = new User({ username: 'Joe' });

    joe.save()
      .then(() => {
        assert(!joe.isNew);
        done();
      });
  });
});
