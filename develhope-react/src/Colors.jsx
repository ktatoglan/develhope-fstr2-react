import React from "react";
import Color from "./Color";

const Colors = ({ items }) => {
  return (
    <ul>
      {items.map((color) => (
        <Color key={color.id} id={color.id} name={color.name} />
      ))}
    </ul>
  );
};

export default Colors;
