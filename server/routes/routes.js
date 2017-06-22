const Users = require('../../db/controllers/users');
const Jobs = require('../../db/controllers/jobs');
const Contacts = require('../../db/controllers/contacts');

module.exports = (app) => {

  app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

};
