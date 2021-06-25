import React, {
  createContext, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';

const registerRequestContext = createContext();

function registerRequestProvider({ children }) {
  const [registerRequest, setRegisterRequest] = useState();

  return (
    <registerRequestContext.Provider value={{
      registerRequest, setRegisterRequest,
    }}
    >
      {children}
    </registerRequestContext.Provider>
  );
}

registerRequestProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useRegisterRequest = () => useContext(registerRequestContext);

export { registerRequestProvider, useRegisterRequest };
