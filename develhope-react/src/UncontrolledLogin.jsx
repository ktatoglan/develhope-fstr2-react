import React, { useRef } from 'react';

const UncontrolledLogin = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberMeRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const rememberMe = rememberMeRef.current.checked;
    onLogin({ username, password, rememberMe });
  };

  const handleReset = () => {
    usernameRef.current.value = '';
    passwordRef.current.value = '';
    rememberMeRef.current.checked = false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
        />
      </div>
      <div>
        <label htmlFor="rememberMe">
          <input
            type="checkbox"
            id="rememberMe"
            ref={rememberMeRef}
          />
          Remember Me
        </label>
      </div>
      <button type="submit">
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default UncontrolledLogin;
