import React from "react";
import Age from "./Age";

function Welcome({ name, age }) {
  const isJohn = name === 'John';
  const isAgeValid = age > 18 && age < 65;
  return (
    <div>
      <p>Welcome, {name}!</p>
      {isJohn && isAgeValid && <Age age={age} />}
    </div>
  );
}

export default Welcome;
