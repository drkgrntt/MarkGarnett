const passport = require('passport');
const keys = require('../config/keys');
const User = require('../models/User');

module.exports = (app) => {
  // register admin user
  app.post('/api/register', async (req, res) => {
    const newUser = new User({
      username: req.body.username,
    });

    if (req.body.adminCode !== keys.adminCode) {
      return res.send("invalid admin code");
    }

    User.register(newUser, req.body.password, (err) => {
      if (err) {
        res.send(err);
      }

      passport.authenticate('local')(req, res, () => {
        res.send(newUser);
      });
    });
  });

  // login as admin
  app.post('/api/login', passport.authenticate('local',
    {
      successRedirect: '/',
      failureRedirect: '/admin'
    }), () => {
  });

  // logout
  app.get('/api/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });

  // make site aware of an admin user
  app.get('/api/currentUser', (req, res) => {
    res.send(req.user);
  });
}
