import React from 'react';
import Colors from './Colors'; // Assuming the component is in a separate file

const App = () => {
  const colorList = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

  return (
    <>
      <h1>Available Colors</h1>
      <Colors items={colorList} />
    </>
  );
};

export default App;