import React, { useRef } from 'react';

function BasicExample() {
  // Create a ref object using useRef
  const inputRef = useRef(null);

  const focusInput = (e) => {
    console.log(inputRef.current);
    
    // Access the DOM element directly using the ref
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default BasicExample;