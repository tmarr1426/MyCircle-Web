import React, { useState } from "react";

const Counter = ({ name }) => {
  const [count, setCount] = useState(5);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter" style={{ textAlign: "center" }}>
      <h4 className="h4">{name}</h4>
      <button className="putt-button" type="button" onClick={increment}>
        +
      </button>
      <p className="">{count}</p>
      <button className="putt-button" type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
