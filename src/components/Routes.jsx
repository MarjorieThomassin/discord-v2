import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Auth from './Auth';
import Settings from './Settings';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Router>
      <Switch>
        {route('/', Auth)}
        {route('/login', Login)}
        {route('/register', Register)}
        {route('/profile', Profile)}
        {route('/profile/settings', Settings)}
      </Switch>
    </Router>
  );
}

export default Routes;
