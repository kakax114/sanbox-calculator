import React, { Component } from "react";
import ReactDOM from "react-dom";
import Keyboard from "./Keyboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "nothing"
    };
  }

  handleKeyPressed = event => {
    console.log("yo");
    this.setState({
      val: this.state.val + event.target.innerHTML
    });
  };

  render() {
    return (
      <div>
        <input className="resultBar" />
        <div>{this.state.val}</div>
        <Keyboard keyPress={this.handleKeyPressed} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
