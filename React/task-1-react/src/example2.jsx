import React, { useState, useRef, useEffect } from 'react';

function AdvancedExample() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    // Increment renderCount on each render
    renderCount.current += 1;
  });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Renders: {renderCount.current}</h2>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default AdvancedExample;