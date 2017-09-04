import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './App';


export default class LoginScreen extends Component {

  render() {
    return (
      <div id="loginScreen">
        <h1>Login Screen2</h1>
        <Link to="/">Link to home screen</Link>
        <Route path="/" component={Home}/>
      </div>
    );
  }
}
