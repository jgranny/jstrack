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

  },

  editJob(req, res, next) {

  },

  deleteJob(req, res, next) {

  }
};
