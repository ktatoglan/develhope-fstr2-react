import React from "react";

function MouseClicker({ name }) {
  const handleClick = (event) => {
    console.log(name);
  };

  const handleImageClick = (event) => {
    console.log(event.target.getAttribute("src"));
  };

  return (
    <div>
      <button name={name} onClick={handleClick}>
        <img
          src="https://placehold.co/600x400"
          onClick={handleImageClick}
          alt="Button Image"
        />
      </button>
    </div>
  );
}

export default MouseClicker;
