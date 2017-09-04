import React, { Component } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Body from './components/body.js';
import './App.css';


export default class App extends Component {

  render() {

    return (
      <div>
        <div id="site">
          <Header title='Thats-the-Worst'/>
          <Body title="Container" />
          <Footer title='Powered by React'/>
        </div>
      </div>

    );
  }
}
