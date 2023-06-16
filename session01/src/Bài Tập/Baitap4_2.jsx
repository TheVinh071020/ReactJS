import React, { Component } from "react";

class Baitap4_2 extends Component {
  render() {
    return (
      <div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <img
                  src={this.props.src}
                  className="img-fluid rounded-3"
                  alt="Shopping item"
                  style={{ width: 65 }}
                />
              </div>
              <div className="ms-3">
                <h5>{this.props.name}</h5>
                <p className="small mb-0">{this.props.type}</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: 50 }}>
                <h5 className="fw-normal mb-0">{this.props.number}</h5>
              </div>
              <div style={{ width: 80 }}>
                <h5 className="mb-0">{this.props.price}</h5>
              </div>
              <a href="#!" style={{ color: "#cecece" }}>
                <i className="fas fa-trash-alt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Baitap4_2;
