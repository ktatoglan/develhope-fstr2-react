import React from 'react';

function MouseClicker({ name }) {
  const handleClick = (event) => {
    console.log(name);
  };

  return (
    <div>
       <button name={name} onClick={handleClick}>
        <img src="https://placehold.co/600x400" alt="Button Image" />
      </button>
    </div>
  );
}

export default MouseClicker;
