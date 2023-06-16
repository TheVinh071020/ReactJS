import React, { Component } from "react";
import Baitap4_2 from "./Baitap4_2";
import Baitap4_3 from "./Baitap4_3";

class Baitap4 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Iphone 11 pro",
          src: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
          type: "256GB, Navy Blue",
          price: "$900",
          number: "2",
        },
        {
          name: "Samsung galaxy Note 10",
          src: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
          type: "256GB, Navy Blue",
          price: "$900",
          number: "2",
        },
        {
          name: "Canon EOS M50",
          src: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
          type: "Onyx Black",
          price: "$1199",
          number: "1",
        },
        {
          name: "1TB, Graphite",
          src: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
          type: "256GB, Navy Blue",
          price: "$1799",
          number: "1",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="mb-3">
                          <a href="#!" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2" />
                            Continue shopping
                          </a>
                        </h5>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-1">Shopping cart</p>
                            <p className="mb-0">
                              You have 4 items in your cart
                            </p>
                          </div>
                          <div>
                            <p className="mb-0">
                              <span className="text-muted">Sort by:</span>{" "}
                              <a href="#!" className="text-body">
                                price <i className="fas fa-angle-down mt-1" />
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="card mb-3">
                          {this.state.data.map((item, index) => (
                            <Baitap4_2
                              key={index}
                              name={item.name}
                              src={item.src}
                              type={item.type}
                              price={item.price}
                              number={item.number}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="card bg-primary text-white rounded-3">
                          <Baitap4_3 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Baitap4;
