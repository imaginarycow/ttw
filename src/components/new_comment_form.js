import React, { Component } from 'react';


export default class NewCommentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      this.setState({value: e.target.value});
    }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
    //create new comment

    //reset state
    this.setState({value: ''});
  }

  render() {
    return (
      <div id="commentForm">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="New comment here" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
