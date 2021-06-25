import React, {
  createContext, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';

const LoginRequestContext = createContext();

function LoginRequestProvider({ children }) {
  const [loginRequest, setLoginRequest] = useState();

  return (
    <LoginRequestContext.Provider value={{
      loginRequest, setLoginRequest,
    }}
    >
      {children}
    </LoginRequestContext.Provider>
  );
}

LoginRequestProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useLoginRequest = () => useContext(LoginRequestContext);

export { LoginRequestProvider, useLoginRequest };
