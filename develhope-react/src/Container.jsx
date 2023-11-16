import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="bg-white border border-red-500 p-4">
      {children}
    </div>
  );
};

export default Container;