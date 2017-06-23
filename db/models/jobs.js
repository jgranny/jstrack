const mongoose = require('mongoose');
const ContactsSchema = require('./contacts');

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  dateApplied: Date,
  company: String,
  position: String,
  lastContact: Date,
  contacts: [{
    type: Schema.Types.ObjectId,
    ref: 'contact'
  }],
  jobListingUrl: String
});

const Job = mongoose.model('job', JobSchema);

module.exports = Job;
