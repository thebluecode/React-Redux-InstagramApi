import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './common/Header';
import ManageHomePage from './home/ManageHomePage';
import ManageDetailsPage from './details/ManageDetailsPage';
import test from './test';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <div className="row">
            <Route exact path="/" component={ManageHomePage}/>
            <Route path="/details/:user_id/:lat/:lng" component={ManageDetailsPage}/>
            <Route path="/test" component={test}/>
        </div>
      </div>
    );
  }
}

export default App;