import React, { Component } from 'react';

class Baitap6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
        };
      }
    
      toggleModal = () => {
        this.setState((element) => ({
          isOpen: !element.isOpen,
        }));
      };
    
      render() {
        const { isOpen } = this.state;
    
        return (
          <div>
            <button onClick={this.toggleModal}>Open Modal</button>
            {isOpen && (
              <div className="modal">
                <div className="modal-content">
                  
                  <h2>Modal Content</h2>
                  <p>hế lô</p>
                </div>
              </div>
            )}
          </div>
        );
      }
    }

export default Baitap6;