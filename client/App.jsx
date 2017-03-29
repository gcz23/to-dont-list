import React, { Component } from 'react';
//import './App.css';
const User = require('./user-model');

/*export default*/ class App extends Component {
  constructor(state) {
    super();
    this.state = {

    };
  };

  getInitialState() {
    //Find all habits with 'user' property matching matching 'user' cookie;
  };

  populate() {

  };

  render () {
    return(
      <div className = 'container'>
        App has been rendered...
      </div>
    )
  };
}


class UserHabit extends Component {
  constructor(state) {
    super();
    this.state = {

    };
  };

  render () {
    return(

    )
  };

}


module.exports = App;