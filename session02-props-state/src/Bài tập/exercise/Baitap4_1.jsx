import React, { Component } from 'react';

class Baitap4_1 extends Component {
    render() {
        const handleSearch = (event) => {
          onSearch(event.target.value);
        };
      
        return (
          <div>
            <input type="text" onChange={handleSearch} placeholder="Search by name" />
          </div>
        );
    
    }
}

export default Baitap4_1;