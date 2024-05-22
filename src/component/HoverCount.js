import React, { Component } from 'react'
import HocCounterl from './HocCounterl'
class HoverCount extends Component {
    
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
     
        <h1>{this.props.name} {count} time Hover</h1>
        <button onMouseOver={incrementCount}>Over</button>
        <hr />
      </div>
    )
  }
}
export default  HocCounterl(HoverCount)