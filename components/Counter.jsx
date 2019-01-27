import React from "react";

const Counter = ({ startingCount = 0 }) => {
  const [count, setCount] = React.useState(startingCount);
  return (
    <React.Fragment>
      <button className="incr" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="decr" onClick={() => setCount(count - 1)}>
        -
      </button>
      <p className="count">{count}</p>
    </React.Fragment>
  );
};

export default Counter;
