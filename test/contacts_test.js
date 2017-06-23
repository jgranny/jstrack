const assert = require('assert');
const Contact = require('../db/models/contacts');
const User = require('../db/models/users');
const Job = require('../db/models/jobs');

describe('Contacts model', () => {
  let jim, jimsJob;

  beforeEach(done => {
    jim = new User({ username: 'Jim' });
    jimsJob = new Job({
      company: 'Hooli',
      position: 'CEO',
      jobListingUrl: 'www.hooli.com/jobs'
    });

    jim.jobs.push(jimsJob);

    Promise.all([jim.save(), jimsJob.save()])
      .then(() => done());
  });


  it('adds a new contact', done => {
    const contact = new Contact({
      name: 'Jack Barker',
      email: 'jbarker@hooli.com',
      cellPhone: '555-555-5555'
    });

    console.log(jim);
    done();
  });

});
