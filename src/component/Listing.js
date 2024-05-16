import React, { Component } from 'react'

export default class Listing extends Component {
  render() {
    
    const props= this.props
    const style = props.name =='saeed' ?{color:'blue'}:{color: 'red'}

    return (
        
      <div>
        <h1 style={style}>Heyy {props.name} and my age is {props.age}</h1>
        
      </div>
    )
  }
}
