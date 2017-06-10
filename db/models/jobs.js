const mongoose = require('mongoose');
const ContactsSchema = require('./contacts');

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  dateApplied: Date,
  company: String,
  position: String,
  contacts: [ContactsSchema],
  lastContact: Date,
  jobListingUrl: String,
  userId: Number
});

module.exports = JobSchema;
