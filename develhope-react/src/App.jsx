import React from 'react';
import useFormInput from './useFormInput'; // Adjust the path as needed

const App = () => {
  const { values, handleInputChange } = useFormInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form values
    console.log('Username:', values.username);
    console.log('Password:', values.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
