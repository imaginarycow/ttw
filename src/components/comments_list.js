import React, { Component } from 'react';
import Comment from './comment.js';

var comms = {};

export default class CommentList extends Component {

  render() {
    comms = this.props.comments;
    return (
      <div id="commentList">
        <ul>{comms.map((comm)=>{return <Comment key={comm.user+comm.comment} user={comm.user}
           text={comm.comment} replies={comm.replies}/>})}</ul>
      </div>
    );
  }
}
