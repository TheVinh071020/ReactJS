import React, { Component } from "react";

class FindSection extends Component {
  render() {
    return (
      <div>
        <section className="find_section layout_padding-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-8 offset-md-2">
                <div className="find_container">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="find_container-img">
                        <img src="images/find-img.png" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h3>
                        Find Everything <br />
                        From A to Z
                      </h3>
                      <p>Shop Back to school</p>
                    </div>
                  </div>
                </div>
                <div className="shop_container">
                  <div className="row">
                    <div className="col-sm-6">
                      <p>Shoes</p>
                      <h3>Shop by catagories</h3>
                      <div>
                        <a href=""> View More </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="shoe_img-box">
                        <img src="images/shoes.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="find_img-box">
                  <img src="images/find-hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FindSection;
