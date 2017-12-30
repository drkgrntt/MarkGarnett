const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const User = require('./models/User');
const app = express();

// MONGOOSE CONFIG
mongoose.connect(keys.databaseURL);
mongoose.Promise = global.Promise;

// MIDDLEWARES
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// PASSPORT CONFIG
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTES
require('./routes/authRoutes')(app);

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
