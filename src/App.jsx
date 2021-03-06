import React from 'react';
import Routes from './components/Routes';
import { LoginRequestProvider } from './context/loginRequest';
import './App.css';

function App() {
  return (
    <>
      <LoginRequestProvider>
        <Routes />
      </LoginRequestProvider>
    </>
  );
}

export default App;
