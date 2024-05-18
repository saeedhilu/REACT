import React, { Component, Fragment } from "react";

export default class FragmentDemo extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello</h1>
        <p>hello</p>
      </Fragment>
    );
  }
}


// Using the Shorthand Syntax




// function FragmentDemo1() {
    
//   return (
//     <>
//             <h1>Heyyyy    </h1>
//             <h2>Iam Shorthand key</h2>
//     </>
   
//   )
// }

// export default FragmentDemo1







//  Using the key


// import React, { Component } from 'react'

// export default class FragmentDemo extends Component {
//   render() {
//     const values = ['hey']

//     return (
    
    
//         <React.Fragment key="key">
//             {
//                 this.values.map((value)=>{
//                     return <h1>{value}</h1>
//                 })
//             }
//         </React.Fragment>


// )
//   }
// }
