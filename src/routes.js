import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Details from './components/details/Details';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="details/:user_id/:lat/:lng" component={Details} />
  </Route>
);
