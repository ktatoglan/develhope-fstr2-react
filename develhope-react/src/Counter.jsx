import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);

  useEffect(() => {
    if (counter > initialValue) {
      directionRef.current = 'up';
    } else if (counter < initialValue) {
      directionRef.current = 'down';
    }
  }, [counter, initialValue]);

  const prevDirectionRef = useRef(null);
  useEffect(() => {
    if (directionRef.current !== prevDirectionRef.current) {
      console.log('Direction changed:', directionRef.current);
      prevDirectionRef.current = directionRef.current;
    }
  }, [directionRef.current]);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
