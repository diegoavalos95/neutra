import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is gonna be awesome
        </p>
      </div>
    );
  }
}

export default connect( state => ({
  location: state.router
})
)(App)

