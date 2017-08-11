import React, { Component } from 'react';
import '../App.css';

export default class Header extends Component {

  render() {
    return (
      <div id="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
