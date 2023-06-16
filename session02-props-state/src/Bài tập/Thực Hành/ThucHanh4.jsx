import React, { Component } from 'react';

class ThucHanh4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        };
    };
    handleCount = () => {
        this.setState({
            value:this.state.value + 1,
        })
    }
    render() {
        return (
            <div>
                <p>Số lần baasmcuar  bạn là : {this.state.value}</p>
                <button onClick= {this.handleCount}>Click</button>
            </div>
        );
    }
}

export default ThucHanh4;