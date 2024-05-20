import React, { Component } from 'react'

export default class Regularcomponent extends Component {
  render() {
    console.log('hey iam regualar component');
    return (
      <div>Regularcomponent{this.props.name}</div>
    )
  }
}
