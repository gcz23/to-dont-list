const User = require('./user-model');
const cookieController = require('./../cookies/cookie-controller');
const sessionController = require('./../session/session-controller');
const mongoose = require('mongoose');
//const passport = require('passport');

const userController = {};


userController.createUser = (req, res) => {
  let newUser;
  if (req.body.username && req.body.password) {
    newUser = {
      username: req.body.username,
      password: req.body.password
    };
  }
  User.create(newUser, (err, item) => {
    if (err) res.redirect('/signup');
    else {
      cookieController.setSSIDCookie(req, res, item);
      sessionController.startSession(item);
      res.redirect('/habit-list');
    }
  })
};

userController.verifyUser = (req, res) => {
  User.findOne({ username: req.body.username }, (err, item) => {
    if (err || !item || item.password !== req.body.password) res.redirect('/');
    else {
      cookieController.setSSIDCookie(req, res, item);
      sessionController.startSession(item);
      res.redirect('/habit-list');
    }
  });
};

userController.logout = (req, res) => {
  sessionController.endSession();
  cookieController.removeCookies(req, res);
  res.redirect('/');
}

module.exports = userController;