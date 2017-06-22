const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/jstrack');

app.use(bodyParser.json());

routes(app);

//Access client side files
app.use(express.static(path.join(__dirname, '../public/')));

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
