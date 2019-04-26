import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Matrix from "./containers/Matrix";
import Draggable from "react-draggable"; // <DraggableCore>

class App extends Component {
  render() {
    return (
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div>
          <Matrix />
        </div>
      </Draggable>
    );
  }
}

export default App;
