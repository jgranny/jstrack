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
      })
      .catch(next);
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
      })
      .catch(next);
  },

  editJob(req, res, next) {
    const jobId = req.params.jobId;
    const jobProps = req.body;

    Job.findByIdAndUpdate(jobId, jobProps)
      .then(() => Job.findById(jobId))
      .then(job => res.send(job))
      .catch(next);
  },

  deleteJob(req, res, next) {
    const jobId = req.params.jobId;

    Job.findByIdAndRemove(jobId)
      .then(job => res.status(204).send(job))
      .catch(next);
  }
};
