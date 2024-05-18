import React, { Component } from 'react'

export default class LIfecyleA extends Component {
    state = {
        name:'saeed123  ',
        
    }
  render() {
    
    
    console.log('Heyy welcome');
    return (
      <div>
            <h1>{this.state.name}</h1>
      </div>
    )
  }
  static getDerivedStateoFormProps(props,state){
    console.log('iam getDerivedStateoFormProps');
  }
  componentDidMount(){
    console.log('iam componentDidMount');
    }
    componentDidUpdate(prevProps,prevState){
        console.log('iam componentDidUpdate');
        }
        shouldComponentUpdate(nextProps,nextState){
            console.log('iam shouldComponentUpdate');
    
        }
        componentDidMount(){
            console.log('iam componentDidMount');
            }
        
}
