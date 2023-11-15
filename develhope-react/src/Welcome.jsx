import React from 'react';

const Welcome = ({ className }) => {
  return (
    <div className={`welcome ${className}`}>
      <h1>Welcome!</h1>
      <p>This is the Welcome component.</p>
    </div>
  );
};

export default Welcome;