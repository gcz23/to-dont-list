const Habit = require('./habit-model');
const mongoose = require('mongoose');

const habitController = {};

habitController.createHabit = (req, res) => {
  Habit.create({ user: req.cookies.user, info: req.body.habit }, (err, item) => {
    if (err) console.log('Error creating new habit:', err);
    else console.log('Habit created:', item);
  });
  res.redirect('/habit-list');
};

habitController.success = (req, res) => {
  //Need to update once connected to submit button...

}

habitController.failure = (req, res) => {

}



module.exports = habitController;
