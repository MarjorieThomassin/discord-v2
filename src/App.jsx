import React from 'react';
import Login from './components/Login';
import './App.css';
import { LoginRequestProvider } from './context/loginRequest';

function App() {
  return (
    <LoginRequestProvider>
      <Login />
    </LoginRequestProvider>
  );
}

export default App;
