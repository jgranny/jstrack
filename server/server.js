const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/jstrack');


app.listen(8004, () => {
  console.log('Server is listening on port 8004...');
});
