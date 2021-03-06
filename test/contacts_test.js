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

  it('GET request to /contacts/:jobId returns a job\'s contacts', done => {
    request(app)
    .get(`/contacts/${jimsJob._id}`)
    .end((err, response) => {
      assert(response.body[0].name === 'Jack Barker');
      done();
    });
  });

  it('POST request to /contacts/:jobId add a contact to a job', done => {
    request(app)
    .post(`/contacts/${jimsJob._id}`)
    .send({
      name: 'Gavin Belson',
      email: 'gbels@hooli.com',
      cellPhone: '123-456-7899'
    })
    .end((err, response) => {
      assert(response.body.contacts.length === 2);
      done();
    });
  });

  it('PUT request to /contacts/:contactId updates a contact', done => {
    request(app)
    .put(`/contacts/${contact._id}`)
    .send({ name: 'James Barker' })
    .end((err, response) => {
      assert(response.body.name === 'James Barker');
      done();
    });
  });

  it('DELETE request to /contacts/:contactId removes a contact', done => {
    Contact.count().then(count => {
      request(app)
      .delete(`/contacts/${contact._id}`)
      .end(() => {
        Contact.count().then(newCount => {
          assert(count > newCount);
          done();
        });
      });
    });
  });

});
