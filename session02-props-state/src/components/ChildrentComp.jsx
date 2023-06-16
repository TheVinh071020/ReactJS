import React, { Component } from "react";

class ChildrentComp extends Component {
  // State:
  //=> dùng để lưu trữ dữ liệu trong component đó => có thể thay đổi đc dữ liệu
  // => để SD đc state cần khai báo lớp bằng constructor
  // => SD super để gọi lớp
  // Để cập nhật state => SD setStare

  constructor() {
    super();
    this.state = {
      studentA: "Nam",
      question: "Có hay ngủ k?",
      anwser: "không",
      display: true,
    };
    // Khi SD function thường cần phải định nghĩa từ khóa this
    // this.handleChangeState = this.handleChangeState.bind(this);
  }

//   SD arrow function

  handleChangeState = () => {
    this.setState({
      anwser: "cóoooo",
    });
  };

// SD function thường

//   handleChangeState(){
//     this.setState({
//         anwser: "cóoooo",
//     });
//   }
67
  handleToggleDisplay = () => {
    this.setState({
        display: !this.state.display,
    })
  };

  render() {
console.log("render lại");
    return (
      <div>
        {/* Nhận props từ component */}
        <h2>
          {this.props.tilteParent} - Khóa học: {this.props.course}
        </h2>
        <p>{this.props.children}</p>

        <h2>/State</h2>
        <p>{this.state.studentA}</p>
        <p>
          {this.state.question} - {this.state.anwser}
        </p>

        {/* Quy tắc đặt tên 
        với các hàm xử lí việc j đó => tiền tố là handle 
        với các hàm xử lí sự kiện => tiền tố là on
        */}
        <button onClick={this.handleChangeState}>click !!</button>

        {/* Cập nhật state liên tục  ? là if, else là :  */}
        {this.state.display ? (
          <div>
            <p>Anh Bách có sp nhiệt tình k??</p>
            <p>Có</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        ) : (
          <div>
            <p>Anh Bách có sp nhiệt tình k??</p>
            <p>Rất nhiệt tình</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        )}
      </div>
    );
  }
}

export default ChildrentComp;
