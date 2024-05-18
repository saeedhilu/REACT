import React, { Component } from 'react'

export default class Form extends Component {

     state = {
        username:'',
        password:'',
        email:'',
    }
    nameHandling = event =>{
        this.setState({
            username:event.target.value
        })
    }
    passwordHandling = event =>{
        this.setState({
            password:event.target.value
        })
    }
    emailHandling = event =>{
        this.setState({
            email:event.target.value
        })
    }
    buttonMessage = (event)=>{
        event.preventDefault();
        alert(`Hey! ${this.state.username} Your Password is ${this.state.password} and Your email is ${this.state.email} `) 
    }
    render() {    
    return (
        <form action="">
            <label htmlFor="">Username</label>
            <input type="text" name="username" id="username" onChange={this.nameHandling} />
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" onChange={this.passwordHandling} />
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="email" onChange={this.emailHandler} />
            <button type="submit" onClick={this.buttonMessage}>Login</button>
        </form>
    )
  }
}
