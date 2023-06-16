import React, { Component } from 'react';

class Baitap3 extends Component {
    render() {
        const currentTime = new Date().toLocaleTimeString();
        return (
            <div>
             <p>Xin chào các bạn !!</p>
             <p>Bây giờ là  :{currentTime}</p>
            </div>
        );
    }
}

export default Baitap3;