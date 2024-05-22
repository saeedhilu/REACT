import React from 'react';

const RenderCounterClicking = ({ count, incrementCount }) => (
  <div>
    <h1>Counter {count} times Clicked</h1>
    <button onClick={incrementCount}>Click me</button>
    <hr />
  </div>
);

export default RenderCounterClicking;
