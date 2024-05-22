import React, { Component } from "react";

const HocCounterl = (UpdateCount) => {
   
  class newCount extends Component {
    state = {
        count:0
    }
    incrementCount= ()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
      return <div>
        <UpdateCount count = {this.state.count} incrementCount={this.incrementCount} name="saeednmnmnm"/>
      </div>;
    }
  }
  return newCount
};
export default HocCounterl;
