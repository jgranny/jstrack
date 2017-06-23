const mongoose = require('mongoose');
const JobSchema = require('./jobs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  jobs: [{
    type: Schema.Types.ObjectId,
    ref: 'job'
  }]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
