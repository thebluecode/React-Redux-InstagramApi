import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
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