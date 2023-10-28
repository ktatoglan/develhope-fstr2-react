import React from "react";
import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      {age !== null && age !== undefined && <Age age={age} />}
    </div>
  );
}

export default Welcome;
