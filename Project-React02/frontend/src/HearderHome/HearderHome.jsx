import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";

function HearderHome() {
  const navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem("userId"));
  const [statusUser, setStatusUser] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${userId.id}`)
      .then((res) => {
        setStatusUser(true);
        if (res.data.locked) {
          handleLogout();
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <div>
      <div className="homepage-header">
        <div className="overlay" />
        <nav className="navbar navbar-expand-lg navbar-dark osahan-nav">
          <div className="container ">
            <NavLink to="/" className="navbar-brand">
              <img alt="logo" src="../img/favicon.png" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="ul navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink to="/" className="nav-link">
                    Trang chủ <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item dropdown dropdown-cart">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/inforestaurent/1"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-shopping-basket" /> Giỏ hàng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="avt1">
            <div className="avt">
              <i class="fa-solid fa-user"></i>
              <p>{userId.name}</p>
            </div>
            {/* logOut */}
            <div className="logout">
              <Button onClick={handleLogout} variant="danger">
                <i class="fa-solid fa-right-from-bracket"></i>
              </Button>
            </div>
          </div>
        </nav>
        <section className="pt-5 pb-5 homepage-search-block position-relative">
          <div className="banner-overlay" />
          <div className="container">
            <div className="row d-flex align-items-center py-lg-4">
              <div className="col-lg-8 mx-auto">
                <div className="homepage-search-title text-center">
                  <h1 className="mb-2 display-4 text-shadow text-white font-weight-normal">
                    <span className="font-weight-bold">
                      Món ngon dành riêng cho bạn
                    </span>
                  </h1>
                  <h5 className="mb-5 text-shadow text-white-50 font-weight-normal">
                    Danh sách nhà hàng với nhiều món ngon ưu đãi
                  </h5>
                </div>
                <div className=" homepage-search-form">
                  <form className="form-noborder">
                    <div className="listSelecte form-row">
                      <div className="col-lg-3 col-md-3 col-sm-12 form-group">
                        <div className="location-dropdown">
                          <select className="custom-select form-control-lg">
                            <option> Tìm kiếm nhanh </option>
                            <option> Ăn sáng </option>
                            <option> Ăn trưa </option>
                            <option> Ăn tối </option>
                            <option> Cafés </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-12 form-group">
                        <input
                          type="text"
                          placeholder="Chọn món theo sở thích"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                        <Link
                          to="/error404"
                          className="btn btn-primary btn-block btn-lg btn-gradient"
                        >
                          Tìm kiếm
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
                <h6 className="mt-4 text-shadow text-white font-weight-normal">
                  Ví dụ. Pizzas, Gà rán, Nem chua...
                </h6>
                <div className="listfood owl-carousel owl-carousel-category owl-theme">
                  <div className="item">
                    <div className="osahan-category-item">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="../img/list/1.png"
                          alt=""
                        />
                        <h6>American</h6>
                        <p>156</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="osahan-category-item">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/list/2.png"
                          alt=""
                        />
                        <h6>Pizza</h6>
                        <p>120</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="osahan-category-item">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/list/3.png"
                          alt=""
                        />
                        <h6>Healthy</h6>
                        <p>130</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="osahan-category-item">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/list/4.png"
                          alt=""
                        />
                        <h6>Vegetarian</h6>
                        <p>120</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="osahan-category-item">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/list/5.png"
                          alt=""
                        />
                        <h6>Chinese</h6>
                        <p>111</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="osahan-category-item">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/list/6.png"
                          alt=""
                        />
                        <h6>Hamburgers</h6>
                        <p>958</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="osahan-category-item">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/list/7.png"
                          alt=""
                        />
                        <h6>Dessert</h6>
                        <p>56</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="osahan-category-item">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/list/8.png"
                          alt=""
                        />
                        <h6>Chicken</h6>
                        <p>40</p>
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="osahan-category-item">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/list/9.png"
                          alt=""
                        />
                        <h6>Indian</h6>
                        <p>156</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HearderHome;
