//----------Create Connection----------//
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/jstrack_tests');
  mongoose.connection
  .once('open', () => { done(); })
  .on('error', (error) => {
    console.warn('Warning', error);
  });
});

//----------Empty out database after every test runs----------//
beforeEach((done) => {
  const { users, jobs, contacts } = mongoose.connection.collections;
  users.drop(() => {
    jobs.drop(() => {
      contacts.drop(() => {
        done();
      });
    });
  });
});
