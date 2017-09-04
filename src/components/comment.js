import React, { Component } from 'react';
import '../css/comment.css';

export default class Comment extends Component {

  render() {
    return (
      <div id="comment">
        <button value="submit">+</button>
        <img src={this.props.user.img} alt={this.props.user.name}/>
        <h6>{this.props.text}</h6>
      </div>
    );
  }
}
