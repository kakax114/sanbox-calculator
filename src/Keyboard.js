import React, { Component } from "react";

class Keyboard extends Component {
  handleClick = event => {
    console.log(event.target.innerHTML);
    this.props.keyPress(event);
  };

  render() {
    return (
      <div>
        <div>
          <button>AC</button>
          <button>↩</button>
        </div>
        <div>
          <button onClick={this.handleClick}>7</button>
          <button>8</button>
          <button>9</button>
          <button>/</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>x</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div />
      </div>
    );
  }
}

export default Keyboard;
