import React, { Component } from "react";

class Baitap5 extends Component {
    images = [
        "https://gaixinhbikini.com/wp-content/uploads/2023/02/hinh-co-gai-xinh-dep-005.jpg",
        "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg",
        "https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-71.jpg",
      ];
  constructor() {
    super();
    this.state = {
      slide:0,
    };
  }
  handlePrevSlide = () => {
    this.setState((element) => ({
        slide: element.slide - 1,
    }));
  };
  handleNextSlide = () => {
    this.setState((element) => ({
        slide: element.slide + 1,
    }));
  };
  render() {
    const { slide } = this.state;

    
    return (
      <div>
        <div className="carousel">
          <button onClick={this.handlePrevSlide}>Previous</button>
          <img style={{ width: "120px" }} src={images[slide]} alt="" />
          <button onClick={this.handleNextSlide}>Next</button>
        </div>
      </div>
    );
  }
}

export default Baitap5;
