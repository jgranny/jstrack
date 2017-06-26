const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/app');

const User = mongoose.model('user');
const Job = mongoose.model('job');
const Contact = mongoose.model('contact')

describe('Jobs model', () => {
  let joe, job1, job2;

  beforeEach(done => {
    joe = new User({ username: 'Joe' });
    job1 = new Job({ company: 'PiedPiper', position: 'Java Developer' });
    job2 = new Job({ company: 'Breem Hall', position: 'Junior VC' });
    contact = new Contact({ name: 'Lori Breem', email: 'lb@breemhall.com'})

    joe.jobs.push(job1, job2);
    job2.contacts.push(contact);

    Promise.all([ joe.save(), job1.save(), job2.save(), contact.save() ])
      .then(() => done());
  });

  it('GET request to /jobs/:userId returns an array of jobs', done => {
    request(app)
    .get(`/jobs/${joe._id}`)
    .end((err, response) => {
      assert(response.body.length === 2);
      done();
    })
  });

});
