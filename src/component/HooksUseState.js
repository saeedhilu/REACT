import React, { useState } from "react";

function HooksUseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>+</button>
      <button onClick={()=>{
        setCount(count-1)
      }}>-</button>
    </div>
  );
}

export default HooksUseState;
