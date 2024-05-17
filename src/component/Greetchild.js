import React, { Component } from 'react'

export default class Greetchild extends Component {
  render(props) {
    return (
      <div>
            <button onClick={()=>this.props.fn('saeed')} >Click here for p-c rel</button>
      </div>
    )
  }
}
