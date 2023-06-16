import React, { Component } from 'react';

class ThucHanh2 extends Component {
    render() {
        return (
            <button style={{background: this.props.background, color: this.props.color }}>
                {this.props.text}
            </button>
        );
    }
}

export default ThucHanh2;