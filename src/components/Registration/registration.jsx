import React from 'react';
import './registration.css';
import { useState } from 'react';
import RegIcon from '../../img/register.png';

export const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  function handleInput(inputType, { target: { value } }) {
    const atIndex = value.indexOf('@');

    setUser((prevUser) => ({
      ...prevUser,
      [inputType]: value,
      username:
        inputType === 'email' && atIndex > -1
          ? value.slice(0, atIndex)
          : prevUser.username,
    }));
  }

  function handleFormData(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className="container">
      <h1 className="registration__headline">registration</h1>
      <img
        src={RegIcon}
        alt="Registration icon"
        className="registration--icon"
      ></img>
      <form className="form__container" onSubmit={handleFormData}>
        <input
          placeholder="Email Address"
          className="register__input"
          onChange={(e) => handleInput('email', e)}
          value={user.email}
        ></input>
        <input
          placeholder="User Name"
          className="register__input"
          onChange={(e) => handleInput('username', e)}
          value={user.username}
        ></input>
        <input
          placeholder="Password"
          className="register__input"
          onChange={(e) => handleInput('password', e)}
          value={user.password}
        ></input>
        <input
          placeholder="Confirm Password"
          className="register__input"
          onChange={(e) => handleInput('passwordConfirm', e)}
          value={user.passwordConfirm}
        ></input>
        <button type="submit" className="button--submit">
          register
        </button>
      </form>
    </div>
  );
};
