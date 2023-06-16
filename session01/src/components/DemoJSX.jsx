// rcc

import React, { Component } from 'react';

class DemoJSX extends Component {
    render() {
        const greeting = "Helloo world!!";
        const people = {
            name:"Nam yêu Hàn",
            course:"ReactJS",
        }
        return (
            <div>
                {/* Phép nội suy trong JSX */}
                {/* Lưu ý:
                + class => className
                + Các thuộc tính sẽ đc viết theo camelCase 
                ví dụ: background-color => backgroundColor
                + Các sự kiện cũng sẽ viết theo camelCase
                ví dụ: onclick => onClick, onchage => onChange 
                */}
                <h2 style={{backgroundColor: "pink", color:"white" }} className="container">{greeting}</h2>
                <p>
                    studentName: {people.name} - Khóa học: {people.course}
                </p>
            </div>
        );
    }
}

export default DemoJSX;