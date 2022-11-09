import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button className="reset" disabled={!count} onClick={() => setCount(0)}>
          Reset
        </button>
        <button
          disabled={!count}
          onClick={() => setCount((prev) => (prev <= 0 ? 0 : prev - 1))}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
