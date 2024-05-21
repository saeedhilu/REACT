import React, { Component } from 'react'

// export default class RefForwade extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" />
//       </div>
//     )
//   }
// }
//////////////////////////// this is fn based
const forwardRef=(props,refs)=>{
    console.log('1====================================');

    console.log('2====================================');
    return(
        <div>   
            <input type="text" ref={refs} />
          
        </div>
    )
}
export default React.forwardRef(forwardRef)
