import React, { Component } from 'react'
import Greetchild from './Greetchild'
export default class Greetparent extends Component {
    alertHandler(name){
        alert(`This message from ${name}`)
    }
  render() {
    return (
      <div>
        <Greetchild fn={this.alertHandler} />
        
      </div>
    )
  }
}
