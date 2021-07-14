import React, { useState } from 'react';
import {
  BrowserRouter as Router, NavLink, Switch, Route, Redirect,
} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Profile.css';
// import Home from './Home';
// import DM from './DM';
import Friends from './Friends';
// import Feed from './Feed';
// import Settings from './Settings';
// import Servers from './Servers';
import crow from '../assets/crow.png';
import otter from '../assets/otter.png';
import logov2 from '../assets/logov2.png';

// import { useLoginRequest } from '../context/loginRequest';

function Profile() {
  // const menfou = <FontAwesomeIcon icon={faSearch} />;

  // const { loginRequest } = useLoginRequest();
  // if (loginRequest == null) {
  //   return (
  //     <Redirect to="/login" />
  //   );
  // }

  const [imgClicked, setImgClicked] = useState();

  return (
    <>
      <div className="navContainer">
        <div className="navServers">
          <input type="image" className="homeLogo" alt="Home" src={logov2} onClick={() => setImgClicked(true)} />
          {imgClicked && <Redirect to="/servers" />}
          <ul className="displayServers">
            <li><img className="imgServer" src={otter} alt="" /></li>
            <li><img className="imgServer" src={crow} alt="" /></li>
            <li><img className="imgServer" src={otter} alt="" /></li>
            <li><img className="imgServer" src={crow} alt="" /></li>
            <li><img className="imgServer" src={otter} alt="" /></li>
            <li><img className="imgServer" src={crow} alt="" /></li>
          </ul>
        </div>
        <Router>
          <ul className="NavList">
            <section className="searchBar">
              <input
                className="searchInput"
                type="text"
                placeholder="search/launch conversation"
              />
            </section>
            <li className="LinkNav"><NavLink activeClassName="active" to="/Friends">Friends</NavLink></li>
            <h1 className="titleMessages">Private messages +</h1>
            <ul className="friendsList">
              <li className="friend">
                <img className="logoFriend" src={logov2} alt="" />
                <span className="pseudoFriend">Little Crow</span>
              </li>
              <li className="friend">
                <img className="logoFriend" src={logov2} alt="" />
                <span className="pseudoFriend">Friend 2</span>
              </li>
              <li className="friend">
                <img className="logoFriend" src={logov2} alt="" />
                <span className="pseudoFriend">Friend 3</span>
              </li>
              <li className="friend">
                <img className="logoFriend" src={logov2} alt="" />
                <span className="pseudoFriend">Friend 4</span>
              </li>
              <li className="friend">
                <img className="logoFriend" src={logov2} alt="" />
                <span className="pseudoFriend">Friend 5</span>
              </li>
            </ul>

            {/* <li className="LinkNav"><NavLink activeClassName="active"
           exact to="/">Home</NavLink></li>
          <li className="LinkNav">
            <NavLink activeClassName="active" to="/Feed">
              {' '}
              Feed
            </NavLink>
          </li> */}

            {/* <li className="LinkNav"><NavLink activeClassName="active"
           to="/Servers">Servers</NavLink></li>
          <li className="LinkNav"><NavLink activeClassName="active"
           to="/profile/settings">Settings</NavLink></li>
          <li className="LinkNav"><NavLink activeClassName="active" to="/DM">DM</NavLink></li> */}
          </ul>
          <Switch>
            {/* <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/DM" component={DM} /> */}
            <Route exact path="/Friends" component={Friends} />
            {/* <Route exact path="/Feed" component={Feed} />
          <Route exact path="/Servers" component={Servers} /> */}
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default Profile;
