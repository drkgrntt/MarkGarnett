const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const app = express();

// MONGOOSE CONFIG
mongoose.connect(keys.databaseURL);
mongoose.Promise = global.Promise;

// MIDDLEWARES
app.use(bodyParser.json());

// ROUTES

// FOR PRODUCTION
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// BOOM GOES THE DYNAMITE
app.listen(keys.port, process.env.IP, () => {
  console.log('Server is running');
});
