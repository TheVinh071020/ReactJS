import React, { Component } from 'react';

class Baitap3 extends Component {
    constructor(props){
        super(props);
        this.state ={
            textInput:"",
        };
    }
    onClickBtn
    handleChangeInput = (element) =>{
        this.setState({
            textInput: element.target.value
        })
    };
    handleSubmitForm = (element) => {
        element.preventDefault();
        this.setState({
            textInput: element.target.value
        })
    }
    render() {
        return (
            <div>
                <form >
                    <input type="text" value={this.state.textInput} onChange={this.handleChangeInput} />
                    <button onClick={this.handleSubmitForm}>Click</button>
                </form>
                <p>
                   {this.state.textInput}
                </p>
            </div>
        );
    }
}

export default Baitap3;
