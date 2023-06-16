import React, { Component } from 'react';

class Timer extends Component {
    render() {
        return (
            <div>
                Timer: {this.props.time}
            </div>
        );
    }
}

export default Timer;