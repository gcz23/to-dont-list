const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
  user: { type: String, required: true },
  info: { type: String, required: true },
  successes: { type: Array, default: [] },
  failures: { type: Array, default: [] },
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
