import React, { useState } from "react";

function BasicStates() {
  const [count, setCount] = useState(0);
  const OnClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>click {count}</p>
      <button onClick={OnClick}>Click</button>
    </div>
  );
}
export default BasicStates;
