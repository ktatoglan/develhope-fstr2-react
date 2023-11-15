import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const counterStyle = {
    fontSize: '24px', 
    fontWeight: 'bold', 
    backgroundColor: '#f04423', 
    padding: '8px',
    borderRadius: '4px', 
  };

  return (
    <div>
      <h2>Counter</h2>
      <div style={counterStyle}>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
