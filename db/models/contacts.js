const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
  name: String,
  email: String,
  cellPhone: String,
  workPhone: String,
});

const Contacts = mongoose.model('contact', ContactsSchema);

module.exports = Contacts;
