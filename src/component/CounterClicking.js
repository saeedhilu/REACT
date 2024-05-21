import React, { Component } from 'react'

export default class CounterClicking extends Component {
    state = {
        count:0
    }
    incremeantCount= ()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h1>Counter {this.state.count} times Clicking</h1>
        <button onClick={this.incremeantCount}>Click me</button>
        <hr />
      </div>
    )
  }
}
