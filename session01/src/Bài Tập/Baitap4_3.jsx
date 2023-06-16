import React, { Component } from "react";

class Baitap4_3 extends Component {
  render() {
    return (
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Card details</h5>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
            className="img-fluid rounded-3"
            style={{ width: 45 }}
            alt="Avatar"
          />
        </div>
        <p className="small mb-2">Card type</p>
        <a href="#!" type="submit" className="text-white">
          <i className="fab fa-cc-mastercard fa-2x me-2" />
        </a>
        <a href="#!" type="submit" className="text-white">
          <i className="fab fa-cc-visa fa-2x me-2" />
        </a>
        <a href="#!" type="submit" className="text-white">
          <i className="fab fa-cc-amex fa-2x me-2" />
        </a>
        <a href="#!" type="submit" className="text-white">
          <i className="fab fa-cc-paypal fa-2x" />
        </a>
        <form className="mt-4">
          <div className="form-outline form-white mb-4">
            <input
              type="text"
              id="typeName"
              className="form-control form-control-lg"
              siez={17}
              placeholder="Cardholder's Name"
            />
            <label className="form-label" htmlFor="typeName">
              Cardholder's Name
            </label>
          </div>
          <div className="form-outline form-white mb-4">
            <input
              type="text"
              id="typeText"
              className="form-control form-control-lg"
              siez={17}
              placeholder="1234 5678 9012 3457"
              minLength={19}
              maxLength={19}
            />
            <label className="form-label" htmlFor="typeText">
              Card Number
            </label>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-outline form-white">
                <input
                  type="text"
                  id="typeExp"
                  className="form-control form-control-lg"
                  placeholder="MM/YYYY"
                  size={7}
                  minLength={7}
                  maxLength={7}
                />
                <label className="form-label" htmlFor="typeExp">
                  Expiration
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline form-white">
                <input
                  type="password"
                  id="typeText"
                  className="form-control form-control-lg"
                  placeholder="●●●"
                  size={1}
                  minLength={3}
                  maxLength={3}
                />
                <label className="form-label" htmlFor="typeText">
                  Cvv
                </label>
              </div>
            </div>
          </div>
        </form>
        <hr className="my-4" />
        <div className="d-flex justify-content-between">
          <p className="mb-2">Subtotal</p>
          <p className="mb-2">$4798.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="mb-2">Shipping</p>
          <p className="mb-2">$20.00</p>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <p className="mb-2">Total(Incl. taxes)</p>
          <p className="mb-2">$4818.00</p>
        </div>
        <button type="button" className="btn btn-info btn-block btn-lg">
          <div className="d-flex justify-content-between">
            <span>$4818.00</span>
            <span>
              Checkout <i className="fas fa-long-arrow-alt-right ms-2" />
            </span>
          </div>
        </button>
      </div>
    );
  }
}

export default Baitap4_3;
