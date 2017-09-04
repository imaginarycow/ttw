import React, { Component } from 'react';
import CommentForm from './new_comment_form.js';
import CommentsList from './comments_list.js';

export default class CommentArea extends Component {

  render() {
    return (
      //composed of new comment form and list of comments
      <div id="comments">
        <CommentForm />
        <CommentsList comments={this.props.comments}/>
      </div>
    );
  }
}
