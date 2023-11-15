import React, { useState } from 'react';
import styles from './TodoList.module.scss';
const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const resetItems = () => {
    setItems([]);
  };

  return (
    <div className={styles.todoList}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.todoInput}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button className={styles.addButton} onClick={addItem}>
          Add
        </button>
        <button onClick={resetItems}>Reset</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
