import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import FooterHome from "../FooterHome/FooterHome";
import HearderHome from "../HearderHome/HearderHome";

function Home() {
  const [user, setUser] = useState([]);

  const userId = JSON.parse(localStorage.getItem("userId"));
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${userId}`)
      .then((res) => {
        setUser([res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(user);

  // Data nhà hàng
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/post").then((response) => {
      setData(response.data);
    });
  }, []);
  // console.log(data);

  return (
    <div>
      <>
        <HearderHome />
        <section className="section pt-5 pb-5 bg-white homepage-add-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="products-box">
                  <a href="listing.html">
                    <img
                      alt=""
                      src="../img/pro1.jpg"
                      className="img-fluid rounded"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="products-box">
                  <a href="listing.html">
                    <img
                      alt=""
                      src="img/pro2.jpg"
                      className="img-fluid rounded"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="products-box">
                  <a href="listing.html">
                    <img
                      alt=""
                      src="img/pro3.jpg"
                      className="img-fluid rounded"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="products-box">
                  <a href="listing.html">
                    <img
                      alt=""
                      src="img/pro4.jpg"
                      className="img-fluid rounded"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-5 pb-5 products-listing">
          <div className="container">
            <div className="section-header text-center white-text">
              <h2>Danh sách cửa hàng</h2>
              <span className="line" />
            </div>
            <div className="row d-none-m">
              <div className="col-md-12">
                <div className="dropdown float-right">
                  <a
                    className="btn btn-outline-info dropdown-toggle btn-sm border-white-btn"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by: <span className="text-theme">Distance</span>{" "}
                    &nbsp;&nbsp;
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow-sm border-0 ">
                    <a className="dropdown-item" href="#">
                      Distance
                    </a>
                    <a className="dropdown-item" href="#">
                      No Of Offers
                    </a>
                    <a className="dropdown-item" href="#">
                      Rating
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mt-0 mb-3">
                  OFFERS <small className="h6 mb-0 ml-2">299 restaurants</small>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="filters shadow-sm rounded bg-white mb-4">
                  <div className="filters-body">
                    <div id="accordion">
                      <div className="filters-card border-bottom p-4">
                        <div className="filters-card-header" id="headingTwo">
                          <h6 className="mb-0">
                            <a
                              href="#"
                              className="btn-link"
                              data-toggle="collapse"
                              data-target="#collapsetwo"
                              aria-expanded="true"
                              aria-controls="collapsetwo"
                            >
                              All cuisines
                              <i className="icofont-arrow-down float-right" />
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapsetwo"
                          className="collapse show"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body card-shop-filters">
                            <form className="filters-search mb-3">
                              <div className="form-group">
                                <i className="icofont-search" />
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Start typing to search..."
                                />
                              </div>
                            </form>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb6"
                              >
                                All <small className="text-black-50">200</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb7"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb7"
                              >
                                Đồ ăn{" "}
                                <small className="text-black-50">150</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb8"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb8"
                              >
                                Đồ uống{" "}
                                <small className="text-black-50">50</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb9"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb9"
                              >
                                Đồ chay{" "}
                                <small className="text-black-50">30</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb10"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb10"
                              >
                                {" "}
                                Tráng miệng{" "}
                                <small className="text-black-50">80</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb11"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb11"
                              >
                                {" "}
                                Pizza/Burger{" "}
                                <small className="text-black-50">25</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb12"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb12"
                              >
                                {" "}
                                Món gà{" "}
                                <small className="text-black-50">70</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb13"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb13"
                              >
                                {" "}
                                Món lẩu{" "}
                                <small className="text-black-50">30</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb14"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cb14"
                              >
                                {" "}
                                Mì phở{" "}
                                <small className="text-black-50">505</small>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filters pt-2">
                  <div className="filters-body rounded shadow-sm bg-white">
                    <div className="filters-card p-4">
                      <div>
                        <div className="filters-card-body card-shop-filters pt-0">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio1"
                              name="customRadio"
                              className="custom-control-input"
                              defaultChecked=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio1"
                            >
                              Gold Partner
                            </label>
                          </div>
                          <div className="custom-control custom-radio mt-1 mb-1">
                            <input
                              type="radio"
                              id="customRadio2"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio2"
                            >
                              Order Food Online
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="customRadio3"
                              name="customRadio"
                              className="custom-control-input"
                              defaultChecked=""
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadio3"
                            >
                              Osahan Eat
                            </label>
                          </div>
                          <hr />
                          <small className="text-success">
                            Use code OSAHAN50 to get 50% OFF (up to $30) on
                            first 5 orders. T&amp;Cs apply.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-md-9">
                <div className="row">
                  {data.map((e, index) => (
                    <div key={e.id} className="  col-md-4 col-sm-6 mb-4 pb-2">
                      {/* nhà hàng */}
                      <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                        <div className="list-card-image">
                          <div className="star position-absolute">
                            <span className="badge badge-success">
                              <i className="icofont-star" />
                              {e.start} (500+)
                            </span>
                          </div>
                          <div className="favourite-heart text-danger position-absolute">
                            <a href="detail.html">
                              <i className="icofont-heart" />
                            </a>
                          </div>
                          <div className="member-plan position-absolute">
                            <span className="badge badge-dark">Promoted</span>
                          </div>

                          <img
                            src={e.src}
                            className="img-fluid item-img img-restaurent"
                          />
                        </div>
                        <div className="p-3 position-relative">
                          <div className="list-card-body">
                            <h6 className="mb-1">
                              <a href="detail.html" className="text-black">
                                {e.name}
                              </a>
                            </h6>
                            <p className="text-gray mb-3">{e.location}</p>
                            <p className="text-gray mb-3 time">
                              <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                <i className="icofont-wall-clock" /> {e.ship}
                              </span>{" "}
                            </p>
                          </div>
                          <div className="list-card-badge">
                            <Link user={user} to={`/inforestaurent/${e.id}`}>
                              <button class="button">Đặt món</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="col-md-12 text-center load-more">
                    <button
                      className="btn btn-primary"
                      type="button"
                      disabled=""
                    >
                      <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterHome />
      </>
    </div>
  );
}

export default Home;
