import React from 'react';

const RenderHoverCount = ({ count, incrementCount }) => (
  <div>
    <h1>Counter {count} times Clicked</h1>
    <button onMouseOver={incrementCount}>Click me</button>
    <hr />
  </div>
);

export default RenderHoverCount;
