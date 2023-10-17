import React from 'react';

function Welcome({ name }) {
  return <p>Welcome, {name}!</p>;
}

Welcome.defaultProps = {
    name: 'Kazim',
  };
  

export default Welcome;
