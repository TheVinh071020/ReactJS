import React, { Component } from 'react';
import Timer from './Timer';
import Buttons from './Buttons';

class Baitap1 extends Component {
    constructor(){
        super()
        this.state={
            time: 0,
            isRunning: true,
        }
    }
    //Viết 3 hàm : handleStart, handleStop, handleReset
    handleStart=()=>{
        setInterval( () => {
            this.setState ((prevState) => ({

                retime:prevState.time + 1,
            }));
        },1000);
        this.setState({isRunning:true})
    }
    render() {
        const {time} = this.state
       console.log(time);
        return (
            <div>
                <h1>Clock</h1>
                <Timer time={time}/>
                <Buttons/>
            </div>
        );
    }
}

export default Baitap1;