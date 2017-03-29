const User = require('./../user/user-model');


const cookieController = {};

cookieController.setSSIDCookie = (req, res, item) => {
  res.cookie('ssid', item._id, {httpOnly: true});
  res.cookie('user', item.username);
};

cookieController.removeCookies = (req, res) => {
  res.cookie('ssid', 'override', {expires: new Date(100)});
  res.cookie('user', 'override', {expires: new Date(100)});
}

module.exports = cookieController;
