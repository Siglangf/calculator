import React, { Component } from "react";
import "./display.css";

class Display extends Component {
  render() {
    return (
      <div className="display">
        <p className="text">{this.props.value}</p>
      </div>
    );
  }
}

export default Display;
