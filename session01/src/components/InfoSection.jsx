import React, { Component } from "react";

class InfoSection extends Component {
  render() {
    return (
      <div>
        <section className="info_section layout_padding">
          <div className="container links_container">
            <div className="row">
              <div className="col-md-3">
                <h3>CUSTOMER SERVICE</h3>
                <ul>
                  <li>
                    <a href=""> International Help </a>
                  </li>
                  <li>
                    <a href=""> Contact Customer Care </a>
                  </li>
                  <li>
                    <a href=""> Return Policy </a>
                  </li>
                  <li>
                    <a href=""> Privacy Policy </a>
                  </li>
                  <li>
                    <a href=""> Shipping Information </a>
                  </li>
                  <li>
                    <a href=""> Promotion Terms </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3>LET US HELP YOU</h3>
                <ul>
                  <li>
                    <a href=""> Your Account </a>
                  </li>
                  <li>
                    <a href=""> Your Orders </a>
                  </li>
                  <li>
                    <a href=""> Shipping Rates &amp; Policies </a>
                  </li>
                  <li>
                    <a href=""> Amazon Prime </a>
                  </li>
                  <li>
                    <a href=""> Returns &amp; Replacements </a>
                  </li>
                  <li>
                    <a href=""> Help </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3>INFORMATION</h3>
                <ul>
                  <li>
                    <a href=""> About Us </a>
                  </li>
                  <li>
                    <a href=""> Careers </a>
                  </li>
                  <li>
                    <a href=""> Sell on shop </a>
                  </li>
                  <li>
                    <a href=""> Press &amp; News </a>
                  </li>
                  <li>
                    <a href=""> Competitions </a>
                  </li>
                  <li>
                    <a href=""> Terms &amp; Conditions </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3>OUR SHOP</h3>
                <ul>
                  <li>
                    <a href=""> Daily Deals </a>
                  </li>
                  <li>
                    <a href=""> App Only Deals </a>
                  </li>
                  <li>
                    <a href=""> Our Hottest Products </a>
                  </li>
                  <li>
                    <a href=""> Gift Vouchers </a>
                  </li>
                  <li>
                    <a href=""> Trending Product </a>
                  </li>
                  <li>
                    <a href=""> Hot Flash Sale </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="follow_container">
              <div className="row">
                <div className="col-md-9">
                  <div className="app_container">
                    <h3>DOWNLOAD OUR APPS</h3>
                    <div>
                      <img src="images/google-play.png" alt="" />
                      <img src="images/apple-store.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info_social">
                    <div>
                      <a href="">
                        <img src="images/fb.png" alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img src="images/twitter.png" alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img src="images/linkedin.png" alt="" />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img src="images/instagram.png" alt="" />
                      </a>
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

export default InfoSection;
