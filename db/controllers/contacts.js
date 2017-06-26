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
    const jobId = req.params.jobId;
    const contactProps = req.body;

    Contact.create(contactProps)
      .then(contact => {
        Job.findById(jobId)
          .then(job => {
            job.contacts.push(contact);
            res.send(job);
          });
      })
      .catch(next);
  },

  editContact(req, res, next) {
    const contactId = req.params.contactId;
    const contactProps = req.body;

    Contact.findByIdAndUpdate(contactId, contactProps)
      .then(() => Contact.findById(contactId))
      .then(contact => res.send(contact))
      .catch(next);
  },

  deleteContact(req, res, next) {
    const contactId = req.params.contactId;

    Contact.findByIdAndRemove(contactId)
      .then(contact => res.status(204).send(contact))
      .catch(next);
  }

};
