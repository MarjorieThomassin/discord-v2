import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
// import Login from './Login';
import '../CSS/Auth.css';
// import { LoginRequestProvider } from '../context/loginRequest';
// import Register from './Register';
// import { registerRequestProvider } from '../context/registerRequest';

// import authbg from '../assets/auth-bg.png';

function Auth() {
  const [buttonLogin, setButtonLogin] = useState(false);
  const [buttonRegister, setButtonRegister] = useState(false);

  return (
    <div id="auth">
      <h1>
        Welcome to DiscordV2 !
      </h1>
      {/* <div className="img-container" id="authbg">
        <img className="bgimg" src={authbg} alt="" />
      </div> */}
      <div className="btn-log-containers">
        <button className="sbt-btn" type="submit" onClick={() => setButtonLogin(true)}>Connexion</button>
        {buttonLogin && (
        <Redirect to="/login" />
        )}
        <button className="sbt-btn" type="submit" onClick={() => setButtonRegister(true)}>Inscription</button>
        {buttonRegister && (
        <Redirect to="/register" />

        )}
      </div>
    </div>
  );
}

export default Auth;
