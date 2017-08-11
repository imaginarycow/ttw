import React, { Component } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';


class App extends Component {

  render() {

    return (
      <div>
        <Header title='Thats-the-Worst.com'/>

        <Footer title='Powered by React'/>
      </div>
    );
  }
}

export default App;
