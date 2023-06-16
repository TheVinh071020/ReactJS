import React, { Component } from "react";

class HeaderPage extends Component {
  render() {
    return (
      <div>
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a
                className="navbar-brand"
                href="index.html"
                style={{ paddingRight: 200 }}
              >
                <span> Rikkei Store </span>
              </a>
              <div className="navbar-collapse" id="">
                <div className="container">
                  <div className="mr-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav justify-content-between">
                      <div className="d-none d-lg-flex">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            HOMEPAGE
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            PRODUCT
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            ABOUT
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            CONTACT
                          </a>
                        </li>
                      </div>
                      <div className="d-none d-lg-flex">
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Login / Register
                          </a>
                        </li>
                        <form className="form-inline my-2 ml-5 mb-3 mb-lg-0">
                          <button
                            className="btn my-2 my-sm-0 nav_search-btn"
                            type="submit"
                          />
                        </form>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        
      </div>
    );
  }
}

export default HeaderPage;
