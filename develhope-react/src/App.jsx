import "./App.css";
import Counter from "./Counter";

function App() {


  return (
    <Counter initialValue={10} incrementAmount={2} decrementAmount={1} />
  );
}

export default App;
