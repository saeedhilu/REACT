import React, { Component } from 'react'
import Welcome from './component/Welcome'
import { Greet } from './component/Greet'
export default class App extends Component {

  render() {
    return (
      <div>
<Greet/>
<Welcome/>
      </div>
      
    )
  }
}
