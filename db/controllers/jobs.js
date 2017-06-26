const Job = require('../models/jobs');
const User = require('../models/users');

module.exports = {
  listJobs(req, res, next) {
    const userId = req.params.userId;

    User.findOne({ _id: userId })
      .populate({
        path: 'jobs',
        populate: {
          path: 'contacts'
        }
      })
      .then(user => {
        res.send(user.jobs);
      });
  },

  createJob(req, res, next) {
    const userId = req.params.userId;
    const jobProps = req.body;

    Job.create(jobProps)
      .then(job => {
        User.findOne({ _id: userId })
        .then(user => {
          user.jobs.push(job);
          res.send(user);
        });
      });
  },

  editJob(req, res, next) {

  },

  deleteJob(req, res, next) {

  }
};
