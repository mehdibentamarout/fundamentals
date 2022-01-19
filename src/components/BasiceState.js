import React, { useState } from "react";

function BasiceState() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <p>click {toggle ? "On" : "Off"}</p>
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Toogle
      </button>
    </div>
  );
}
export default BasiceState;
