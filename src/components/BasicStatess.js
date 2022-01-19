import React, { useState } from "react";

function BasicStatess() {
  const [count, setCount] = useState(0);
  const OnClick = () => {
    setCount((prevState) => prevState + 10);
    setCount((prevState) => prevState + 10);
  };
  return (
    <div>
      <p>click {count}</p>
      <button onClick={OnClick}>Click</button>
    </div>
  );
}
export default BasicStatess;
