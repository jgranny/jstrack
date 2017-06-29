const Users = require('../../db/controllers/users');
const Jobs = require('../../db/controllers/jobs');
const Contacts = require('../../db/controllers/contacts');
const path = require('path');

module.exports = (app, passport) => {

  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../public/index.html'));
  // });

  //User routes
  app.post('/login', passport.authenticate('login'), Users.authRes);

  app.post('/user', passport.authenticate('signup'), Users.authRes);

  app.put('/user/:userId', Users.editUser);

  app.delete('/user/:userId', Users.deleteUser);

  //Job routes
  app.get('/jobs/:userId', Jobs.listJobs);

  app.post('/jobs/:userId', Jobs.createJob);

  app.put('/jobs/:jobId', Jobs.editJob);

  app.delete('/jobs/:jobId', Jobs.deleteJob);

  //Contact routes
  app.get('/contacts/:jobId', Contacts.getContacts);

  app.post('/contacts/:jobId', Contacts.createContact);

  app.put('/contacts/:contactId', Contacts.editContact);

  app.delete('/contacts/:contactId', Contacts.deleteContact);

};
