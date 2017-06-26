const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/app');

const Contact = mongoose.model('contact');
const User = mongoose.model('user');
const Job = mongoose.model('job');

describe('Contacts model', () => {
  let jim, jimsJob, contact;

  beforeEach(done => {
    jim = new User({ username: 'Jim' });
    jimsJob = new Job({
      company: 'Hooli',
      position: 'CEO',
      jobListingUrl: 'www.hooli.com/jobs'
    });
    contact = new Contact({
      name: 'Jack Barker',
      email: 'jbarker@hooli.com',
      cellPhone: '555-555-5555'
    });

    jim.jobs.push(jimsJob);
    jimsJob.contacts.push(contact);

    Promise.all([jim.save(), jimsJob.save(), contact.save()])
      .then(() => done());
  });


  it('saves a relation between a job and it\'s contacts', done => {
    User.findOne({ username: 'Jim' })
      .populate({
        path: 'jobs',
        populate: {
          path: 'contacts'
        }
      })
      .then(user => {
        assert(user.jobs[0].contacts[0].name === 'Jack Barker')
        done();
      });
  });

});
