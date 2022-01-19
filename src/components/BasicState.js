import React, { useState } from "react";

function BasicState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>click {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
export default BasicState;
