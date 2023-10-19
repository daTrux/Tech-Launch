import React from 'react'
import ReactDOM from 'react-dom'
import { Observable as Event } from 'windowed-observable';

class App extends React.Component {

  render() {
    const mystyle = {
      margin:" 1em 0 1em 1em",
      height: "3em",
      width: "8em",
      background: "#c7ff1d",
      cursor: "pointer",
      border: "none",
      "font-weight": "light",
      color: "black",
      position: "relative",
      overflow: "hidden",
      outline: "none",
      "border-radius": "2px"
    }
    const reactVersion = require('./package.json').dependencies['react'];
    const eventReactManager = new Event('ReactButtonClickEvent');
    const click = () => {
      eventReactManager.publish('Current React version: ' + reactVersion)
    }
    return (<button style={mystyle} onClick={click}>React Button</button>)
  }
}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }

  
}

customElements.define('react-element', Mfe4Element);