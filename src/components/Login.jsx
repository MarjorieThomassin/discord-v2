import React, { useRef } from 'react';
import axios from 'axios';
import Profile from './Profile';
import '../CSS/Login.css';

import { useLoginRequest } from '../context/loginRequest';

function Login() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const {
    loginRequest, setLoginRequest,
  } = useLoginRequest();
  console.log(useLoginRequest());

  if (loginRequest != null) {
    return (
      <Profile />
    );
  }

  return (
    <div className="Title">
      <h1>Connectez vous!</h1>
      <form action="post" className="loginForm">
        <label className="loginEmail" htmlFor="email">
          <input className="inputLogin" ref={emailInput} type="email" id="email" placeholder="your email" required />
        </label>
        <label className="loginPassword" htmlFor="password" id="password">
          <input className="inputLogin" ref={passwordInput} type="password" placeholder="your password" required />
        </label>
        <button
          className="loginButton"
          value="submit"
          type="button"
          onClick={() => {
            const url = 'http://localhost:8000/user';
            axios.post(url, {
              email: emailInput.current.value,
              password: passwordInput.current.value,
            })
              .then((response) => {
                setLoginRequest(response.data);
              });
          }}
        >
          Valider
        </button>
      </form>
    </div>
  );
}

export default Login;
