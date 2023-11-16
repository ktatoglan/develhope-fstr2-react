import { useState, useCallback } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter - 1);
  }, []);

  const reset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return { counter, increment, decrement, reset };
};

export default useCounter;
