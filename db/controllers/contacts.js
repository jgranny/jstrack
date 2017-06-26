const Contact = require('../models/contacts');
const Job = require('../models/jobs');

module.exports = {

  getContacts(req, res, next) {
    const jobId = req.params.jobId;

    Job.findById(jobId)
      .populate('contacts')
      .then(job => res.send(job.contacts))
      .catch(next);
  },

  createContact(req, res, next) {

  },

  editContact(req, res, next) {

  },

  deleteContact(req, res, next) {

  }

};
