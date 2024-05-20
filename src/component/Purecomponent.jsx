import React, { PureComponent } from 'react';

export default class Purecomponent extends PureComponent {
  render() {
    console.log('*****************************************Hey iam pure component');
    return (
      <div>PureComponent {this.props.name} </div>
    );
  }
} 
