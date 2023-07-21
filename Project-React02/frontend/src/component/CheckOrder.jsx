import React, { useEffect, useState } from "react";
import NavBar from "../ListRetaurent/NavBar";
import Footer from "../ListRetaurent/Footer";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function CheckOrder({ useLogin }) {
  const [total, setTotal] = useState("");
  const userId = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();

  useEffect(() => {
    const totalProduct = JSON.parse(localStorage.getItem("total"));
    if (totalProduct) {
      axios
        .get(`http://localhost:8000/users/${useLogin.id}`)
        .then((res) => {
          const user = res.data;
          user.total = totalProduct;

          axios
            .put(`http://localhost:8000/users/${useLogin.id}`, user)
            .then((res) => {
              setTotal(res.data.total);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const { id } = useParams();
  const [infoRestaurent, setInfoRestaurent] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/post/1")
      .then((response) => {
        setInfoRestaurent(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${useLogin.id}`)
      .then((res) => {
        setUser(res.data.cart);
      })
      .catch((err) => console.log(err));
  }, []);

  //  Khi click thì xóa giỏ hàng và quay về home
  console.log(userId);
  const handlePay = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...userId,
      cart: [],
    };
    axios
      .put(`http://localhost:8000/users/${userId.id}`, updatedUser)
      .then((res) => {
        // console.log(res);
        if (res.data) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Xóa giỏ hàng thất bại:", error.message);
        // Xử lý lỗi nếu cần thiết
      });
  };
  return (
    <div>
      <>
        <NavBar />
        <section className="section pt-4 pb-4 osahan-account-page">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="osahan-account-page-left shadow-sm rounded bg-white h-100">
                  <div className="border-bottom p-4">
                    <div className="osahan-user text-center">
                      <div className="osahan-user-media">
                        <img
                          className="mb-3 rounded-pill shadow-sm mt-1"
                          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                          alt="gurdeep singh osahan"
                        />
                        <div className="osahan-user-media-body">
                          <h6 className="mb-2">{useLogin.name}</h6>

                          <p className="mb-0 text-black font-weight-bold">
                            <a
                              className="text-primary mr-3"
                              data-toggle="modal"
                              data-target="#edit-profile-modal"
                              href="#"
                            >
                              <i className="icofont-ui-edit" /> Sửa
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="orders-tab"
                        data-toggle="tab"
                        href="#orders"
                        role="tab"
                        aria-controls="orders"
                        aria-selected="true"
                      >
                        <i class="fa-solid fa-cart-shopping"></i>
                        Đơn hàng của bạn
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="favourites-tab"
                        data-toggle="tab"
                        href="#favourites"
                        role="tab"
                        aria-controls="favourites"
                        aria-selected="false"
                      >
                        <i class="fa-solid fa-heart"></i>
                        Yêu thích
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="addresses-tab"
                        data-toggle="tab"
                        href="#addresses"
                        role="tab"
                        aria-controls="addresses"
                        aria-selected="false"
                      >
                        <i class="fa-solid fa-location-dot"></i>
                        Địa chỉ giao hàng
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="osahan-account-page-right rounded shadow-sm bg-white p-4 h-100">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="orders"
                      role="tabpanel"
                      aria-labelledby="orders-tab"
                    >
                      <h4 className="font-weight-bold mt-0 mb-4">
                        Lịch sử mua hàng
                      </h4>
                      <div>
                        <button
                          onClick={handlePay}
                          className="btn btn-outline-success"
                        >
                          Xác nhận
                        </button>
                      </div>
                      <div className="bg-white card mb-4 order-list shadow-sm">
                        <div className="gold-members p-4">
                          <a href="#"></a>
                          <div className="media">
                            <a>
                              <img
                                className="mr-4"
                                src={infoRestaurent.src}
                                alt="Generic placeholder image"
                              />
                            </a>

                            <div className="media-body">
                              <h6 className="mb-2">
                                <Link className="text-black">
                                  {infoRestaurent.name}
                                </Link>
                              </h6>

                              <p className="text-dark">
                                {infoRestaurent.location}
                              </p>
                              {user.map((e, index) => (
                                <p className="text-dark">
                                  {e.title} X {e.count}
                                </p>
                              ))}
                              <hr />
                              <div className="float-right">
                                <a
                                  className="btn btn-sm btn-outline-primary"
                                  href="#"
                                >
                                  <i className="icofont-headphone-alt" /> HELP
                                </a>
                                <a
                                  className="btn btn-sm btn-primary"
                                  href="detail.html"
                                >
                                  <i className="icofont-refresh" /> REORDER
                                </a>
                              </div>
                              <p className="mb-0 text-black text-primary pt-2">
                                <span className="text-black font-weight-bold">
                                  {" "}
                                  Total Paid:
                                </span>{" "}
                                {total}VNĐ
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
}

export default CheckOrder;
