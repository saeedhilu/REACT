import React, { Component } from 'react'

export default class HoverCount extends Component {
    state = {
        count:0
    }
    incremeantCount= ()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
     
        <h1>{this.state.count} time Hover</h1>
        <button onMouseOver={this.incremeantCount}>Over</button>
        <hr />
      </div>
    )
  }
}
