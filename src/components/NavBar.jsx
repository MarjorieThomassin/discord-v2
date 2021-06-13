import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import '../CSS/NavBar.css';
import Home from "../components/Home";
import Login from "../components/Login";
import DM from "../components/DM";
import Friends from "../components/Friends";
import Feed from "../components/Feed";
import Settings from "../components/Settings";
import Servers from "../components/Servers";

function NavBar(){
    return(
        <div className="NavContainer">
          <Router>
          <div className="LinkContainer">
            <ul className="NavList">
               <NavLink activeClassName="active" exact to="/"><li className="LinkNav">Home</li></NavLink> 
               <NavLink activeClassName="active" to="/Feed"> <li className="LinkNav">Feed</li></NavLink>
               <NavLink activeClassName="active" to="/Friends"><li className="LinkNav">Friends</li></NavLink>
               <NavLink activeClassName="active" to="/Servers"><li className="LinkNav">Servers</li></NavLink>
               <NavLink activeClassName="active" to="/Settings"><li className="LinkNav">Settings</li></NavLink>
               <NavLink activeClassName="active" to="/DM"><li className="LinkNav">DM</li></NavLink>
            </ul>
            </div>
            <div className="ComponentsRoutes">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Login" component={Login}></Route>
                <Route exact path="/Settings" component={Settings}></Route>
                <Route exact path="/DM" component={DM}></Route>
                <Route exact path="/Friends" component={Friends}></Route>
                <Route exact path="/Feed" component={Feed}></Route>
                <Route exact path="/Servers" component={Servers}></Route>
              </Switch>
              </div>
            </Router>
        </div>
    )
}

export default NavBar;