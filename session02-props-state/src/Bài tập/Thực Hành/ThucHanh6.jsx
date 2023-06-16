import React, { Component } from 'react';

class ThucHanh6 extends Component {
    constructor(props){
        super(props);
        this.state ={
            number: "",
            array: [],
            total: 0,
        };
    }
    handleChangeInput = (element) => {
        this.setState({
            number: +element.target.value,
        })
    }
    handleSubmit = (element) =>{
        element.preventDefault()
        this.setState({
            array:[...this.state.array, this.state.number],
            total: this.state.total + this.state.number,
            number:"",
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" value={this.state.number} onChange={this.handleChangeInput} />
                    <button type='submit'>Add</button>
                </form>
                <span>Ket qua</span>
                <div style={{color:"red"}}>
                    {this.state.array.join("+") + "=" + this.state.total}
                </div>

            </div>
        );
    }
}

export default ThucHanh6;