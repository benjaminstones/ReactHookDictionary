import React from 'react';
import { useState } from 'react';

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseStateExample;