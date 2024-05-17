import React, { Component } from 'react';

export const InnerComponent = class InnerComponent extends Component {
  render() {
    return (
      <div>innerComponent</div>
    );
  }
};

const Greet = (props) => {
    const {name} = props
  console.log('name is',name);
  return (
    <div>
      <h2>Greet {props.children}</h2>
    </div>
  );
};

export default Greet;
