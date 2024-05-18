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

    // return (
    //   <div>
    //         <h2>{user.name}</h2>
    //         <h1>Your are {user.authenticated? ' ':' Not' } Welcome</h1>

    //   </div>
    // )

    // /////////// Using if else method
    // if(user.authenticated){
    //     return(
    //         <div>
    //             <h2>{user.name}</h2>
    //             <h1>Your are Welcome</h1>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             <h1>{user.name}</h1>
    //             <h1>Please signIn</h1>
    //         </div>    

    //     )
        
    // }

    // //////// also if else without using two return 
    // let message;
    // if(user.authenticated){
    //     message=
    //         <div>
    //             <h2>{user.name}</h2>
    //             <h1>Your are Welcome</h1>
    //         </div>
        
    // }else{
    //     message = 
    //         <div>
    //             <h1>{user.name}</h1>
    //             <h1>Please signIn</h1>
    //         </div>    
    // }
    // return <div>{message}</div>


// ///////////////////////////////////////// logical AND operator.

    // return user.authenticated && <h1>Your now welcome {user.name}</h1>


//////////////////// map method
    return(
        this.state.user.map((a,index)=>{
            return(
                <div key={index}>
                    <h1 >this is a {a.name}</h1>
                </div>
            )
        })
    )
  }
}
