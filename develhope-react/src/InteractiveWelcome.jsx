import React, { useState } from "react";
import Welcome from "./Welcome";

const InteractiveWelcome = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <Welcome name={name} />
    </div>
  );
};

export default InteractiveWelcome;
