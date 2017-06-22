const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/jstrack');

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../public/')));

routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});


app.listen(8004, () => {
  console.log('Server is listening on port 8004...');
});

module.exports = app;
