import React, { useRef } from 'react';

const UncontrolledLogin = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleLogin} className="max-w-xs mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="username" className="block mb-1 text-sm font-semibold">
          Username
        </label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-sm font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Login
      </button>
    </form>
  );
};

export default UncontrolledLogin;
