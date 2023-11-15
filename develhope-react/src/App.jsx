import React from 'react';
import Colors from './Colors'; // Assuming the component is in a separate file

const App = () => {
  const colorList = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ];

  return (
    <>
      <h1>Available Colors</h1>
      <Colors items={colorList} />
    </>
  );
};

export default App;