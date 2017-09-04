import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Router, { Route } from "react-browser-router";
import LoginS from '../loginScreen.js';
import '../App.css';

export default class Login extends Component {

  render() {
    return (
      <div id="login">
          <Link to="/login">{this.props.title}</Link>
          <Route path="/login" component={LoginS}/>
      </div>
    );
  }
}
