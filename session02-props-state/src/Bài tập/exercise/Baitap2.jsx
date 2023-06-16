import React, { Component } from "react";

class Baitap2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "leu leu",
    };
  }
  handleChangeText = () => {
    this.setState({
      text: "aaaaaaaaaaaa",
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.handleChangeText}>Change Text</button>
      </div>
    );
  }
}

export default Baitap2;
