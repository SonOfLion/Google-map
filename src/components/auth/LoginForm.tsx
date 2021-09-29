import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import './LoginForm.scss';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [onPush, setOnPush] = useState(false);

  const handleChangeInput = (e: any): void => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e: any): void => {
    setPassword(e.target.value);
  };

  const handleClick = (): void => {
    window.open("https://www.etisalatdigital.ae/en/index.jsp");
  };

  const handleSubmit = (e: any): void => {
    setOnPush(true);
    e.preventDefault();
  };

  return (
    <>
      {
        (password) && (login ) !== '' && (!!onPush) ?
          (<Redirect to={ "/google-api" } />) :
          <form className="login-form">
            <div className="wrapper-logo">
              <img
                onClick={ handleClick }
                className="wrapper-logo__img"
                src="/icons/Etisalat_Digital_logo.max-500x500.png"
                alt="Logo-Etisalat"
              />
            </div>
            <div className="login-form__input-wrapper">
              <input
                value={ login }
                onChange={ handleChangeInput }
                type="text"
                className="login-form__input-wrapper_element"
                id="log-in"
              />
              <label className="login-form__input-wrapper__text" htmlFor="log-in">Log In*</label>
              <input
                value={ password }
                onChange={ handleChangePassword }
                type="text"
                className="login-form__input-wrapper_element"
                placeholder="Password*"
              />
            </div>
            <button
              onClick={ handleSubmit }
              className="login-form__btn"
            >sign in
            </button>
          </form>
      }
    </>
  )
};

export default LoginForm;