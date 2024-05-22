import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
import { UserContext } from './UserContext'
export default class    ContextC extends Component {
    static contextType = UserContext

  render() {
    return (
<h1> value is  
      
{/*         
        {value1 => <div>ContextC: {value1}</div>} */}
        {this.context}</h1>
    )
  }

}
