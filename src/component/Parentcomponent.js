import React, { Component } from 'react';
import RegularComponent from './Regularcomponent';
import Purecomponent from './Purecomponent';

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'saeed'
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'saeed nm'
      });
    }, 2000);
  }

  render() {
    console.log('****************************************** parent compoenent');

    return (
      <div>
        <p>ParentComponent</p>
        <RegularComponent name = {this.state.name}/>
        <Purecomponent  name = {this.state.name}/>
      </div>
    );
  }
}
