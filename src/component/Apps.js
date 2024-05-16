import React, { Component } from 'react'
import './App.css'
import  Listing from './Listing'




export default class Apps extends Component {
    state  =[{
        name:'saeed',
        age:20
    },
    {
        name:'hilu',
        age:20
    },
    {
        name:'zilu',
        age:1
    }
]
    render() {
           
    return (
        <div className="App">
        
            <h1>
                Heyyyyy iam App.js
            </h1>
            
            {
                this.state.map((obj)=>   <Listing  name={obj.name} age={obj.age}/>   )
            }
        </div>
    )
  }
}
