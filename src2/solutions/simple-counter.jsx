import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>
        Button Count:
        <span>{count}</span>
      </p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

//ReactDOM.render(<Counter />, document.getElementById("root"));

export default Counter;
