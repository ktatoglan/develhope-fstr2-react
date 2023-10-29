import React, { useState } from "react";

function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);
  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
    </div>
  );
}

export default Counter;
