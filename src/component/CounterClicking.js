import React, { Component } from 'react'
import HocCounterl from './HocCounterl'

class CounterClicking extends Component {
    
  render() {
    const {count,incrementCount } = this.props
    return (
       
      <div>
        <h1>Counter {count} times Clicked</h1>
        <button onClick={incrementCount}>Click me </button>
        <hr />
      </div>
    )
  }
}
export default  HocCounterl(CounterClicking)