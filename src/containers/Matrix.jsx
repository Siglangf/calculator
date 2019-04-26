import React, { Component } from "react";
import Square from "../components/Square";
import "./Matrix.css";
import Display from "./display";
import { isNumber } from "util";

class Matrix extends Component {
  state = {
    display: 0,
    x: null,
    y: null,
    operation: null,
    adding: true
  };
  renderSymbol = (i, buttonType) => {
    let op = null;
    if (isNumber(i)) {
      op = () => this.handleNumberClick(i);
    } else {
      switch (i) {
        case "=":
          op = () => this.handleEq();
          break;
        case "clear":
          op = () => this.handleClear();
          break;
        default:
          op = () => {
            this.setState({
              operation: i,
              x: this.state.display,
              adding: false
            });
          };
          break;
      }
    }
    return <Square value={i} buttonType={buttonType} onClick={op} />;
  };

  handleClear = () => {
    this.setState({ display: 0, x: null, y: null, op: false });
  };

  handleEq = () => {
    let calculation = null;
    switch (this.state.operation) {
      case "+":
        calculation = this.state.x + this.state.display;
        break;
      case "-":
        calculation = this.state.x - this.state.display;
        break;
      case "\u00f7":
        calculation = this.state.x / this.state.display;
        break;
      default:
        calculation = 0;
        break;
    }
    console.log(this.state.x, this.state.y, this.state.calculation);
    this.setState({ display: calculation });
  };
  handleNumberClick = number => {
    if (this.display === 0) {
      this.setState({ display: number });
    } else if (!this.state.adding) {
      this.setState({ display: number, adding: true });
    } else {
      let n = String(this.state.display);
      n += String(number);
      this.setState({ display: parseInt(n) });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <Display value={this.state.display} />
          </div>

          <div>
            {this.renderSymbol("clear", "clear")}
            {this.renderSymbol("\u00f7", "operator")}
          </div>
          <div className="matrix-row">
            {this.renderSymbol(7, "number")}
            {this.renderSymbol(8, "number")}
            {this.renderSymbol(9, "number")}
            {this.renderSymbol("-", "operator")}
          </div>
          <div className="matrix-row">
            {this.renderSymbol(4, "number")}
            {this.renderSymbol(5, "number")}
            {this.renderSymbol(6, "number")}
            {this.renderSymbol("+", "operator")}
          </div>
          <div className="matrix-row">
            {this.renderSymbol(1, "number")}
            {this.renderSymbol(2, "number")}
            {this.renderSymbol(3, "number")}
            {this.renderSymbol("=", "operator")}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Matrix;
