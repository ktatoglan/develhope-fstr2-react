import React from 'react';

function MouseClicker({ name }) {
  const handleClick = (event) => {
    console.log(event.target.name);
  };

  return (
    <div>
      <button name={name} onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MouseClicker;
