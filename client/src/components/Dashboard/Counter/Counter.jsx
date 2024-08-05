import React, { useState, useEffect } from "react";

const Counter = ({ name, onChange }) => {
  const [count, setCount] = useState(5);

  const increment = () => {
    if (count < 10) {
      const newCount = count + 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  useEffect(() => {
    onChange(count);
  }, []);

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
