const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const path = require('path');
const expressSession = require('express-session');
const passport = require('passport');
const cors = require('cors');

const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/jstrack');
}

app.use(cors());

app.use(expressSession({
  secret: 'sessionSecret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
require('./passport/init')(passport);

app.use(bodyParser.json());

routes(app, passport);

//Access client side files
app.use(express.static(path.join(__dirname, '../public/')));

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
