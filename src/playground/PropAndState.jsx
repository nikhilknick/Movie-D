import React, { Component } from "react";

class PropAndState extends Component {
  render() {
    return (
      <div>
        <Alpha />
      </div>
    );
  }
}

export default PropAndState;

//Alpha Class
class Alpha extends Component {
  state = {
    alphaValue: "Its alpha",
    counter: 1
  };
  clickButton = () => {
    console.log("click");
    console.log(this.state.counter);

    let copyCounter = this.state.counter;
    copyCounter++;
    this.setState({
      counter: copyCounter
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickButton}>click</button>
        <Beta fromAlpha={this.state.alphaValue} />
      </div>
    );
  }
}

class Beta extends Component {
  state = {
    alphaValue: this.props.fromAlpha,
    betaValue: "this is value from beta"
  };
  render() {
    return (
      <div>
        <p>{this.state.alphaValue}</p>
        <p>{this.state.betaValue}</p>
      </div>
    );
  }
}
