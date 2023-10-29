import React, { useState, useEffect } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initialValue, incrementAmount, decrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  const decrementCounter = () => {
    setCounter(counter - decrementAmount);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  useEffect(() => {
    console.log(`Current Counter Value: ${counter}`);
  }, [counter]);

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
      <button onClick={decrementCounter}>Decrement by {decrementAmount}</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default Counter;
