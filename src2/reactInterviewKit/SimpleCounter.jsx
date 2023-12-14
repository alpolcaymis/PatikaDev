import React, { useState } from "react";
// import ReactDOM from "react-dom";

function SimpleCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div id="mainArea">
      <p>
        button count: <span>{counter}</span>
      </p>
      <button id="mainButton" onClick={increment}>
        Increase
      </button>
    </div>
  );
}

export default SimpleCounter;

// ReactDOM.render(
//   <Counter />,
//   document.getElementById('root')
// );
