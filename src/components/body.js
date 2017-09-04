import React, { Component } from 'react';
import Jumbotron from './jumbotron.js';
import Matchup from './matchup.js';
//import '../css/container.css';
import '../App.css';

import {Matchups} from '../data/mock-data.js';

export default class Body extends Component {

  render() {
    //get mock data and create <Matchup /> for each entry
    var matchups = Matchups.map(function(match) {
        return <Matchup key={match.title} image1={match.image1} image2={match.image2}
        image1Votes={match.image1Votes} image2Votes={match.image2Votes} comments={match.comments}/>
      });

    return (

      <div id="body">
        <div id="bodyContainer">
          <div id="adSpace1">AdSpace1</div>
          <Jumbotron id="jumbotron" title="Which is Worse?" />
          <div id="adSpace2">AdSpace2</div>
          <div id="matchUps">{matchups}</div>
        </div>
      </div>

    );
  }
}
//<Matchup image1={image3} image2={image4} image1Votes="153" image2Votes="386"/>
