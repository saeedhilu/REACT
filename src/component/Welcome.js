import React, { Component } from 'react'

export default class Welcome extends Component {
    state = {
        message:'welcome vendors'
    }
    handleClick(){
        this.setState(
            {
                message:'YOu subscribe this channel'
            }
        )
    }

  render() {
    return (
      <div>
        <h1>
            {this.state.message}
        </h1>
        <button onClick={()=>this.handleClick()}>Subscribe </button>
        </div>
    )
  }
}
