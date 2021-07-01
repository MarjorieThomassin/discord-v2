import React, { useRef, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Login.css';

import { useLoginRequest } from '../context/loginRequest';

function Login() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const {
    setLoginRequest,
  } = useLoginRequest();

  const [isClicked, setIsClicked] = useState();

  const history = useHistory();

  const handleSubmit = () => {
    const url = 'http://localhost:8000/login';
    axios.post(url, {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })
      .then((response) => {
        setLoginRequest(response.data);
        if (response.data.pseudo != null) {
          history.push('/profile');
        } else {
          history.push('/profile/settings');
        }
      });
  };

  return (
    <div id="container">
      <h1>Connectez vous!</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        className="loginForm"
      >
        <label className="loginEmail" htmlFor="email">
          <input className="inputLogin" ref={emailInput} type="email" id="email" placeholder="your email or username" required />
        </label>
        <label className="loginPassword" htmlFor="password" id="password">
          <input className="inputLogin" ref={passwordInput} type="password" placeholder="your password" required />
        </label>
        <div className="menfou">
          <button
            className="loginButton"
            value="submit"
            type="submit"
          >
            Valider
          </button>
          <button className="loginButton" type="submit" onClick={() => setIsClicked(true)}>
            {isClicked
             && <Redirect to="/" />}
            Retour
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
