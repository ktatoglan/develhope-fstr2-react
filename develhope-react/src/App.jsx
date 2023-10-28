import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // Function to increment the counter when the button is clicked
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
