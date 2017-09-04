import React, { Component } from 'react';
import Matchup from './matchup.js';
import {MainMatch} from '../data/mock-data.js';
import CommentArea from './comment_area.js';
import '../App.css';

export default class Jumbotron extends Component {

  render() {
    return (
      <div id="jumbotron">
        <h1>{this.props.title}</h1>
        <div id="matchUp">
          <h4 id="vote1">Votes: {MainMatch.image1Votes}</h4>
          <img id="image1" src={MainMatch.image1} alt="image1"/>
          <h3 id="or">Vs</h3>
          <h4 id="vote2">Votes: {MainMatch.image2Votes}</h4>
          <img id="image2" src={MainMatch.image2} alt="image2"/>
          <CommentArea comments={MainMatch.comments}/>
        </div>
      </div>
    );
  }
}
