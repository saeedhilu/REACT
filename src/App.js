import React, { Component } from 'react';
// import Greet from './component/Greet'; // Assuming Greet is a functional component
// import InnerComponent from './component/Welcome';
// import Counter from './component/Counter';
// import Welcome from './component/Welcome'; // Assuming Welcome is a component in Welcome.js
// import Greetparent from './component/Greetparent';
// import Usergreet from './component/Usergreet';
// import Styl from './component/Styl'; 
// import Imge from './component/Imge'; 
// import Form from './component/Form';
// import LIfecyleA from './component/LIfecyleA';
// import FragmentDemo from './component/FragmentDemo';
// import RefDemo from './component/RefDemo';
import PureComponent from './component/Purecomponent';
// import Parentcomponent from './component/Parentcomponent';
// import RefParentForward from './component/RefParentForward';
// import PortalDemo from './component/PortalDemo';
// import ErrorBoutry from './component/ErrorBoutry';
// import CounterClicking from './component/CounterClicking'; 
// import HoverCount from './component/HoverCount';
import Renderuser from './component/Renderuser';
import RenderHoverCount from './component/RenderHoverCount';
import RenderCounterClicking from './component/RenderCounterClicking';

        
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Form/>
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
        
        <Styl name={true} />  */}
       
        
       {/* <Parentcomponent />  */}
       {/* <RefDemo />  */}
       {/* <RefParentForward />  */}
       {/* <PortalDemo/> */}
       {/* <ErrorBoutry name="saeed"/>   */}
        {/* <CounterClicking/> */}
        {/* <HoverCount /> */}
        <h2>Click Counter</h2>
    <Renderuser
      render={(count, incrementCount) => (
        <RenderCounterClicking count={count} incrementCount={incrementCount} />
      )}
    />

    <h2>Hover Counter</h2>
    <Renderuser
      render={(count, incrementCount) => (
        <RenderHoverCount count={count} incrementCount={incrementCount} />
      )}
    />
        
        {/* <RenderCounterClicking/>
        <RenderHoverCount/> */}




      {/* <Imge /> */}




      </div>
    );
  }
}
