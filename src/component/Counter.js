import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
    }
    increamentCounter=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decreamentCounter=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
   render() {
    return (
      <div>
        <h1>
            Count is {this.state.count}
        </h1>
        <button onClick={this.increamentCounter} >+</button>
        <button onClick={this.decreamentCounter} >-</button>
      </div>
    )
  }
}
