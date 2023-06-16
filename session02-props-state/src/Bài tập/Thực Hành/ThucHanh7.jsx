import React, { Component } from "react";

class ThucHanh7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      isShow: true,
      fontSize: 12,
      content: "helloo baby",
    };
  }
  handleToggle = (element) => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  handleChangeBackground = (element) => {
    this.setState({
      color: this.state.color === "black" ? "pink" : "black",
      fontSize: this.state.fontSize === 12 ? 14 : 12,
      content:
        this.state.content === "helloo baby" ? "E xinh gái " : "helloo baby",
    });
  };
  render() {
    return (
      <div>
        {this.state.isShow ? (
          <>
            <p
              style={{ color: this.state.color, fontSize: this.state.fontSize }}
            >
              {this.state.content}
            </p>
            <button onClick={this.handleChangeBackground}>Change</button>
          </>
        ) : (
          ""
        )}
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}

export default ThucHanh7;
