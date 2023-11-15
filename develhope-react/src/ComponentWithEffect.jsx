import React, { useEffect, useRef, useState } from 'react';

const ComponentWithEffect = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log('Component is mounted for the first time.');
      isMounted.current = true;
    }
  }, []);

  return (
    <div>
      <h1>Component with Effect</h1>
    </div>
  );
};

export default ComponentWithEffect;
