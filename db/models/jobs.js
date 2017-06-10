const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  dateApplied: Date,
  company: String,
  position: String,
  contacts: [ContactsSchema],
  lastContact: Date,
  jobListingUrl: String
});

module.exports = JobSchema;
