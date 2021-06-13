import React from 'react';
import {
  BrowserRouter as Router, NavLink, Switch, Route,
} from 'react-router-dom';
import '../CSS/NavBar.css';
import Home from './Home';
import Login from './Login';
import DM from './DM';
import Friends from './Friends';
import Feed from './Feed';
import Settings from './Settings';
import Servers from './Servers';

function NavBar() {
  return (
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
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Settings" component={Settings} />
            <Route exact path="/DM" component={DM} />
            <Route exact path="/Friends" component={Friends} />
            <Route exact path="/Feed" component={Feed} />
            <Route exact path="/Servers" component={Servers} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default NavBar;
