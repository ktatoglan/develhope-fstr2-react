import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const resetItems = () => {
    setItems([]);
  };

  const removeItem = (indexToRemove) => {
    const updatedItems = items.filter((item, index) => index !== indexToRemove);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add</button>
      <button onClick={resetItems}>Reset</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
