import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ManageDetailsPage from './components/details/ManageDetailsPage';

export default (
  <Router history={browserHistory}>
    <Route path="/"  component={App}>
      <IndexRoute component={HomePage} />
      {/* <Route path="/details/:user_id/:lat/:lng" component={ManageDetailsPage} /> */}
      <Route path="#/details" component={ManageDetailsPage} />
    </Route>
  </Router>
);
