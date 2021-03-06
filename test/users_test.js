const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/app');

const User = mongoose.model('user');

describe('User model', () => {

  it('saves a user', done => {
    const joe = new User({ username: 'Joe' });

    joe.save()
      .then(() => {
        assert(!joe.isNew);
        done();
      });
  });

  xit('POST to /user creates a user', done => {
    User.count().then(count => {
      request(app)
      .post('/user')
      .send({ username: 'rhendricks', password: 'piedpiper1' })
      .end(() => {
        User.count().then(newCount => {
          assert(count + 1 === newCount);
          done();
        });
      });
    });
  });

  it('DELETE to /user/:userId deletes a user', done => {
    const joe = new User({ username: 'Joe' });

    joe.save().then(() => {
      request(app)
      .delete(`/user/${joe._id}`)
      .end(() => {
        User.count().then(count => {
          assert(count === 0);
          done();
        });
      });
    });
  });

});
