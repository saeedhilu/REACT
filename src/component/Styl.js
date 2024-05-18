import React, { Component } from 'react'
import './Style.css'
export default class Styl extends Component {
    
  render() {
    const style = {
        color: 'red',
        backgroundColor: 'yellow',
        
        
    }

    let props = this.props.name ? 'styling' : ''
    return (
      <div style={style} className={props}>
        <h2>Hey iam style person </h2>
      </div>
    )
  }
}
