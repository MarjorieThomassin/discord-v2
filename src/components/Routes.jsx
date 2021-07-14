import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Auth from './Auth';
import Settings from './Settings';
import Home from './Home';
import Friends from './Friends';
import Servers from './Servers';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Router>
      <Switch>
        {route('/', Auth)}
        {route('/home', Home)}
        {route('/login', Login)}
        {route('/register', Register)}
        {route('/profile', Profile)}
        {route('/Friends', Friends)}
        {route('/servers', Servers)}
        {route('/profile/settings', Settings)}
      </Switch>
    </Router>
  );
}

export default Routes;
