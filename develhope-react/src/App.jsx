import FilteredList from "./FilteredList";
import "./App.css";

function App() {
  const items = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 18 },
    { id: 4, name: "David", age: 30 },
  ];

  return (
    <>
      <h1>FilteredList Component</h1>
      <FilteredList list={items} />
    </>
  );
}

export default App;
