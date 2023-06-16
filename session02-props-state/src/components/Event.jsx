import React, { Component } from 'react';

class Event extends Component {
    // Sự kiện vs arrow function
    handleClick01 = () => {
        console.log("Click1");
    }
    // Trong JSX khi SD 1 sự kiện => nếu SD handleClick02 () thì hàm sẽ chạy ngay sau khi Component render
    handleClick02 = () => {
        console.log("Click2");
    }
    handleClick03 = () => {
        console.log("Click3");
    }
    handleClick04 = (element) => {
        console.log("Click4");
        console.log(element);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick01}>Click 1</button>
                <button onClick={this.handleClick02 ()}>Click 2</button>
                <button onClick={() => this.handleClick03 }>Click 3</button>
                <button onClick={() => this.handleClick04 ( ' hello world')}>Click 4</button>
            </div>
        );
    }
}

export default Event;