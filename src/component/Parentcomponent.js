import React, { Component,PureComponent } from 'react';
// import RegularComponent from './Regularcomponent';
// // import Purecomponent from './Purecomponent';
import Memo from './Memo';
// export default class ParentComponent extends PureComponent {
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
        name: 'saeed'
      });
    }, 2000);
  }

  render() {
    console.log('****************************************** parent compoenent');

    return (
      <div>
        <p>ParentComponent</p>
        <Memo/>
        {/* <RegularComponent name = {this.state.name}/> */}
        {/* <Purecomponent  name = {this.state.name}/> */}
      </div>
    );
  }
}
