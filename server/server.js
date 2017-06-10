const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const client = require('./routes/client');

const app = express();


mongoose.connect('mongodb://localhost/jstrack');

app.use('/', client);
app.use(express.static(path.join(__dirname, '../public/')));


app.listen(8004, () => {
  console.log('Server is listening on port 8004...');
});
