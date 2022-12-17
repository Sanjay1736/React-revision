import React, { useState } from 'react'

export const AppV3 = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    return (setCount + 1);
  }

  return (
    <>
      <div>FitstCompWithCounter</div>
      <div>This is REACT FIRST CLASS COMPONENT</div>
      <div>Count:-{count}</div>
      <button onClick={()=>Increment(setCount)}>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </>
  );
}
