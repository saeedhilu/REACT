import React, { Component } from 'react'

export default class Usergreet extends Component {
    state =
{
    user:[
        {
            id:1,
            name:"saeed nm",
            age:20,
            authenticated:false
    
            },
            {
                id:2,
                name:"rixu nm",
                age:20,
                authenticated:true
    
            },
            {
                id:3,
                name:"zilu nm",
                age:20,
                authenticated:false
    
                }
    
    ]
}
        
    
  render() {
    const index = Math.floor(Math.random()*3) 
    const user = this.state.user[index]

    return (
      <div>
            <h2>{user.name}</h2>
            <h1>Your are {user.authenticated? ' ':' Not' } Welcome</h1>

      </div>
    )
  }
}
