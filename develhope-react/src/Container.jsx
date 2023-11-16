import React from 'react';

const Container = ({ children, title }) => {
  return (
    <div className="bg-white border border-red-500 p-4">
      {title && <h2 className="text-red-500 text-xl mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Container;