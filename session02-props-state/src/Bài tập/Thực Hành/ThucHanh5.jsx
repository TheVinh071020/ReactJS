import React, { Component } from 'react';

class ThucHanh5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            textInput: "",
        };
    };
    handleChangeInputValue = (element) => {
        this.setState({
            textInput:element.target.value
        })
    };

    handleSubmitForm = (element) => {
        element.preventDefault();
        alert("Bạn vừa nhập: `"+this.state.textInput+"`");
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <input value={this.state.textInput} onChange={this.handleChangeInputValue} />
                    <button type='submit'>Submit</button>

                </form>
            </div>
        );
    }
}

export default ThucHanh5;