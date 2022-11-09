import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button disabled={!count} onClick={() => setCount(0)}>
        Reset
      </button>
      <button
        disabled={!count}
        onClick={() => setCount((prev) => (prev <= 0 ? 0 : prev - 1))}
      >
        -
      </button>
    </>
  );
};

export default Counter;
