const Users = require('../../db/controllers/users');
const Jobs = require('../../db/controllers/jobs');
const Contacts = require('../../db/controllers/contacts');
const path = require('path');

module.exports = (app) => {

  app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

};
