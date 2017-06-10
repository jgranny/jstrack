const mongoose = require('mongoose');
const JobSchema = require('./jobs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  jobs: [JobSchema]
});

const User = mongoose.model('user', UserSchema);

module.exports = UserSchema;
