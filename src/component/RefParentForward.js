import React, { Component } from 'react'
import RefForwade from './RefForwade'
import { forwardRef } from 'react';
export default class RefParentForward extends Component {
    inpuRefs  = React.createRef(); 
    handleClick = () => {
        this.inpuRefs.current.focus(); // Focus the button using the ref
      };
  render() {
    
    
    
    return (
      <div>
        <RefForwade ref={this.inpuRefs}/>
        <button onClick={this.handleClick}>Focus input of forwading refs</button>
      </div>
    )
  }
}
