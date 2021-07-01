import React from 'react';
import {
  BrowserRouter as Router, NavLink, Switch, Route, Redirect,
} from 'react-router-dom';
import '../CSS/Profile.css';
import Home from './Home';
import DM from './DM';
import Friends from './Friends';
import Feed from './Feed';
import Settings from './Settings';
import Servers from './Servers';
import { useLoginRequest } from '../context/loginRequest';

function Profile() {
  const { loginRequest } = useLoginRequest();
  if (loginRequest == null) {
    return (
      <Redirect to="/login" />
    );
  }

  const { pseudo } = loginRequest;

  return (
    <>
      <h1>
        Bienvenue sur ton profil
        {' '}
        {pseudo}
      </h1>
      <Router>
        <ul className="NavList">
          <li className="LinkNav"><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
          <li className="LinkNav">
            <NavLink activeClassName="active" to="/Feed">
              {' '}
              Feed
            </NavLink>
          </li>
          <li className="LinkNav"><NavLink activeClassName="active" to="/Friends">Friends</NavLink></li>
          <li className="LinkNav"><NavLink activeClassName="active" to="/Servers">Servers</NavLink></li>
          <li className="LinkNav"><NavLink activeClassName="active" to="/profile/settings">Settings</NavLink></li>
          <li className="LinkNav"><NavLink activeClassName="active" to="/DM">DM</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/DM" component={DM} />
          <Route exact path="/Friends" component={Friends} />
          <Route exact path="/Feed" component={Feed} />
          <Route exact path="/Servers" component={Servers} />
        </Switch>
      </Router>
    </>
  );
}

export default Profile;
