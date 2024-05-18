import React, { Component } from 'react';
import Greet from './component/Greet'; // Assuming Greet is a functional component
import InnerComponent from './component/Welcome';
import Counter from './component/Counter';
import Welcome from './component/Welcome'; // Assuming Welcome is a component in Welcome.js
import Greetparent from './component/Greetparent';
import Usergreet from './component/Usergreet';
import Styl from './component/Styl'; 
import Imge from './component/Imge'; 
import Form from './component/Form';
import LIfecyleA from './component/LIfecyleA';
import FragmentDemo from './component/FragmentDemo';
export default class App extends Component {
  render() {
    return (
      <div>
        <Form/>
        <Greet name="saeed">
          <p>Heyy iam Children</p> 
        </Greet>
        <InnerComponent name="iam the class name">
          <p>Content from InnerComponent</p>
        </InnerComponent>
        <Counter/>
        <Greetparent/> 
        <Usergreet/> 
        <LIfecyleA/> 
        <FragmentDemo/> 
        <Styl name={true} /> 
       
        







      <Imge />




      </div>
    );
  }
}
