import React, { Component } from 'react'

export default class RefDemo extends Component {
    inputRef = React.createRef();
componentDidMount(){
    console.log(this.inputRef);
    this.inputRef.current.focus()
}
    // Method to focus the input field
    focusInput = () => {
      const v = this.inputRef.current.value;
      alert(v)
    };
    render() {
    
    return (
            <div>
                <h2>RefDemo</h2>
                <input type="text"ref={this.inputRef} />
                < button onClick={this.focusInput}> clicck</button>
            </div>
        )
    }
}
