/* NOTES:
-- mongo in terminal to open database shell
-- npm run dev to start server
*/
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

//Controllers
const userController = require('./user/user-controller');
const habitController = require('./habit/habit-controller');
const cookieController = require('./cookies/cookie-controller');
const sessionController = require('./session/session-controller');


mongoose.connect('mongodb://localhost/todontlist');
mongoose.connection.once('open', () => {
  console.log('Connected to database...')
})


//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(__dirname + './../client'));


//Requests and Responses
app.get('/', sessionController.isLoggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, './../client/index.html'));
});


app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/signup.html'));
});

app.post('/signup', userController.createUser);

app.post('/login', userController.verifyUser);

app.get('/logout', userController.logout);

app.get('/habit-list', sessionController.isLoggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, './../client/habit-list.html'));
});

app.post('/habit-list', habitController.createHabit);

app.get('/habit-list.js', (req, res) => {
  console.log('Looking for habit-list.js');
  res.sendFile(path.join(__dirname, './../client/habit-list.js'));
})

app.post('/quote', (req, res) => {
  //Add a new user-specific motivational quote
})

app.post('/success', (req, res) => {
  //Update database for habit in question
  //Nice job! message?
});

app.post('/failure', (req, res) => {
  //Update database for habit in question, retrieve info
  //Post a motivational quote?
  //Display relevant info (how many successes vs. failures in last day? week?)
});


app.listen(port, () => {
  console.log('Listening on PORT:', port);
});

module.exports = app;
