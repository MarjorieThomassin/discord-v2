import React, { useState } from 'react';
import Login from './Login';
import { LoginRequestProvider } from '../context/loginRequest';
import Register from './Register';
import { registerRequestProvider } from '../context/registerRequest';

function Auth() {
  const [buttonLogin, setButtonLogin] = useState(false);
  const [buttonRegister, setButtonRegister] = useState(false);

  return (
    <div>
      <button type="submit" onClick={() => setButtonLogin(true)}>Se connecter</button>
      {buttonLogin && (
        <LoginRequestProvider>
          <Login />
        </LoginRequestProvider>

      )}
      <button type="submit" onClick={() => setButtonRegister(true)}>Créer son compte</button>
      {buttonRegister && (
        <registerRequestProvider>
          <Register />
        </registerRequestProvider>

      )}
    </div>
  );
}

export default Auth;
