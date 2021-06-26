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
  const {
    loginRequest,
  } = useLoginRequest();
  console.log(loginRequest);
  if (loginRequest === null) {
    return (
      <Redirect to="/login" />
    );
  }
  return (
    <>
      <h1>
        Bienvenue sur ton profil
        {' '}
        {loginRequest.email}
      </h1>
      <div className="NavContainer">
        <Router>
          <div className="LinkContainer">
            <ul className="NavList">
              <NavLink activeClassName="active" exact to="/"><li className="LinkNav">Home</li></NavLink>
              <NavLink activeClassName="active" to="/Feed">
                {' '}
                <li className="LinkNav">Feed</li>
              </NavLink>
              <NavLink activeClassName="active" to="/Friends"><li className="LinkNav">Friends</li></NavLink>
              <NavLink activeClassName="active" to="/Servers"><li className="LinkNav">Servers</li></NavLink>
              <NavLink activeClassName="active" to="/Settings"><li className="LinkNav">Settings</li></NavLink>
              <NavLink activeClassName="active" to="/DM"><li className="LinkNav">DM</li></NavLink>
            </ul>
          </div>
          <div className="ComponentsRoutes">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Settings" component={Settings} />
              <Route exact path="/DM" component={DM} />
              <Route exact path="/Friends" component={Friends} />
              <Route exact path="/Feed" component={Feed} />
              <Route exact path="/Servers" component={Servers} />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default Profile;
