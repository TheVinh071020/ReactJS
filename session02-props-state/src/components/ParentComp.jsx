import React, { Component } from "react";
import ChildrentComp from "./ChildrentComp";

class ParentComp extends Component {
  // Props:
  // => là viết tắt của properties
  // => dùng để lưu trữ các attribute
  // => giá trị props k thể thay đổi
  // => dùng để giao tiếp giữa các c`omponent với nhau ( ví dụ: từ cha xuống con)
  // 3 kiểu gán biến tilte xong gán xuống
  // => gọi tên biến dưới phần render
  // => gọi tên biến cứng trong div return
  // => gọi tên biến trong ChildrenComp

  // ParentComp => ChildrenComp

  render() {
    const tilte = "Rikkei Academy";
    return (
      <div>
        <ChildrentComp tilteParent={tilte} course={"ReactJS"}>
          Time: 15 buổi
        </ChildrentComp>
      </div>
    );
  }
}

export default ParentComp;
