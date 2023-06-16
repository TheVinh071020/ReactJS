import React, { Component } from "react";

class DetailSection extends Component {
  render() {
    return (
      <div>
        <section className="detail_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="detail_img-box">
                  <img src="images/detail.png" alt="" className="w-100" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="detail_container">
                  <div className="detail-box d-box-1">
                    <a href="">
                      <div className="detail-content">
                        <img src="images/d-1.png" alt="" />
                        <h5>Care kids</h5>
                      </div>
                    </a>
                  </div>
                  <div className="detail-box d-box-2">
                    <a href="">
                      <div className="detail-content">
                        <img src="images/d-2.png" alt="" />
                        <h5>Baby boy</h5>
                      </div>
                    </a>
                  </div>
                  <div className="detail-box d-box-3">
                    <a href="">
                      <div className="detail-content">
                        <img src="images/d-3.png" alt="" />
                        <h5>Baby girl</h5>
                      </div>
                    </a>
                  </div>
                  <div className="detail-box d-box-4">
                    <a href="">
                      <div className="detail-content">
                        <img src="images/d-4.png" alt="" />
                        <h5>Sale</h5>
                      </div>
                    </a>
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

export default DetailSection;
