const Session = require('./session-model');

const sessionController = {};


sessionController.isLoggedIn = (req, res, next) => {
  if (req.cookies.ssid) {
    Session.find({ 'cookieId': req.cookies.ssid }, (err, item) => {
      if (err) req.path === '/' ? next() : res.redirect('/');  
      else req.path === '/' ? res.redirect('/habit-list') : next();
    })
  } else req.path === '/' ? next() : res.redirect('/');
};

sessionController.startSession = (item) => {
  Session.create({ 'cookieId': item._id }, (err, session) => {
    if (err) console.log('Failed to create new session.\nError:', err);
    console.log('Creating new session. SSID:', session._id);
  });
};

sessionController.endSession = () => {
  Session.remove({}, (err, session) => {
    if (err) console.log('Error:', err);
  })
}


module.exports = sessionController;