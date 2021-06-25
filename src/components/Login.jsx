import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Home.css';

import { useLoginRequest } from '../context/loginRequest';

function Login() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const {
    loginRequest, setLoginRequest,
  } = useLoginRequest();
  console.log(useLoginRequest());

  if (loginRequest != null) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Title">
      <h1>This is the Login page</h1>
      <form action="post">
        <label className="email" htmlFor="email">
          <input ref={emailInput} type="email" id="email" placeholder="your email" />
        </label>
        <label htmlFor="password" id="password">
          <input ref={passwordInput} type="password" placeholder="your password" />
        </label>
        <button
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
