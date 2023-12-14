import React, { useState } from "react";
// import ReactDOM from 'react-dom';

function ToggleButton() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <button type="button" onClick={handleClick}>
      {toggle ? "ON" : "OFF"}
    </button>
  );
}
export default ToggleButton;

/* ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
); */
