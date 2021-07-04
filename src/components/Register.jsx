import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../CSS/Register.css';

function Register() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const [isClicked, setIsClicked] = useState();

  return (
    <div className="registerForm-container">
      <h1 className="titleLogin">Inscrivez vous !</h1>
      <form
        className="registerForm"
        onSubmit={(event) => {
          event.preventDefault();
          const user = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
          };
          const config = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          };
          fetch('http://localhost:8000/user', config).then((res) => res.json()).then((data) => {
            console.log(data);
          });
        }}
      >
        <label className="emailRegister" htmlFor="email" id="email">
          {' '}
          <input className="inputRegister" ref={emailInput} type="email" id="email" name="email" placeholder="insérez votre email" />

        </label>
        <label className="passwordRegister" htmlFor="password" id="password">

          <input className="inputRegister" ref={passwordInput} type="password" id="password" name="password" placeholder="insérez votre mot de passe" />
        </label>
        <div className="btnRegister">
          <button className="registerButton" type="submit">
            Valider
          </button>
          <button className="registerButton" type="submit" onClick={() => setIsClicked(true)}>
            {isClicked
             && <Redirect to="/" />}
            Retour
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
