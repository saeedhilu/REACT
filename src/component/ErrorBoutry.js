// ///////// EG FOR ERROR BOUNTRY UNDERSTANDING


// import React from 'react';


// const ErrorBoutry = (props) => {
//     if (props.name!=="saeed") {
//         throw new Error('Error')
//     }else{
//        console.log('====================================');
//        console.log('hey iam the console machan');
//        console.log('====================================');
//     }
//     return (
//         <div>
//             <h1>HEy ia m here klasghlier ygiea tyg</h1>
//         </div>
//     );
// }

// export default ErrorBoutry;



// //////// EG FOR USIGN ERROR BOUNTRY 
// import React from 'react';
import React, { Component } from 'react'

export default class ErrorBoutry extends Component {
    state = {
        hasError:false
    }
    static getSDerivedStateFormError(){
     return {
        hasError: true
     }   
    }
  render() {
   if (!this.state.hasError) {
    return (
        <h1>Something went wrong</h1>   
    )
   }
   return this.props.children
  }
}
