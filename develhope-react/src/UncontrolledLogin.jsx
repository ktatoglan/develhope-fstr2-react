import React, { useRef } from 'react';

const UncontrolledLogin = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberMeRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const usernameValue = formData.get('username');
    const passwordValue = formData.get('password');
    const rememberMeValue = formData.get('rememberMe');

    onLogin({ username: usernameValue, password: passwordValue, rememberMe: rememberMeValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <div>
        <label htmlFor="rememberMe">
          <input type="checkbox" id="rememberMe" ref={rememberMeRef} />
          Remember Me
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default UncontrolledLogin;
