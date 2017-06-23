const Users = require('../../db/controllers/users');
const Jobs = require('../../db/controllers/jobs');
const Contacts = require('../../db/controllers/contacts');
const path = require('path');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  //User routes
  app.get('/users:userId', /*Sign in*/);

  app.post('/user', /*Create user*/);

  app.post('/user:userId', /*Edit user*/);

  app.delete('/', /*Delete user*/);

  //Job routes
  app.get('/jobs:userId', /*Get all of a user's jobs*/);

  app.post('/jobs:userId', /*Add a job to the users list*/);

  app.put('/jobs:jobId', /*Edit a job*/);

  app.delete('/jobs:jobId', /*Delete a job*/);

  //Contact routes
  app.get('/contacts:jobId', /*Get all of a job's contacts*/);

  app.post('/contacts:jobId', /*Add a contact to a job*/);

  app.put('/contacts:contactId', /*Edit a contact*/);

  app.delete('/contacts:contactId', /*Delete a contact*/);

};
