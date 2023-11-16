import React from "react";
import useCounter from "./useCounter";

const CounterComponent = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;
