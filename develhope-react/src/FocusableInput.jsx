import React, { useRef, useEffect } from 'react';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default FocusableInput;
