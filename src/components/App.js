import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reactLogo from '../images/logos/react.svg';
import reduxLogo from '../images/logos/redux.svg';
import instaLogo from '../images/logos/instagram.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header row">
          <h1>React + Redux + Instagram API</h1>
          <img src={reactLogo} className="App-logo" alt="logo" />
          <img src={reduxLogo} className="App-logo" alt="logo" />
          <img src={instaLogo} className="App-logo" alt="logo" />
        </div>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;