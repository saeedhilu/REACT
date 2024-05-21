import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class PortalDemo extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <h2>Portal Demo</h2>
      </div>,
      document.getElementById('portal-root')
    )
  }
}
