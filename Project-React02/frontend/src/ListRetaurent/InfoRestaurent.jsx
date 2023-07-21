import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function InfoRestaurent({ useLogin }) {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState([]);
  const { id } = useParams();
  // const userId = JSON.parse(localStorage.getItem("userId"));
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${useLogin.id}`)
      .then((res) => {
        setUser([res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/post/${id}`)
      .then((response) => {
        setData(response.data);
        setMenu(response.data.menu);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const [buyItem, setBuyItem] = useState([]);
  const [clickBuy, setClickBuy] = useState(0);
  const [total, setTotal] = useState(0);

  // console.log(total);
  // Click mua sản phẩm
  const handleBuy = async (index) => {
    console.log(index);
    const selectedItem = menu[index];
    const res = await axios.get(`http://localhost:8000/users/${useLogin.id}`);
    let count = 1;
    const user = res.data;
    let cart = res.data.cart;
    console.log(cart);
    const i = cart.findIndex((item) => item.id === selectedItem.id);
    console.log(i);
    if (i < 0) {
      cart = [...cart, { ...selectedItem, count }];
    } else {
      cart[i].count = cart[i].count + 1;
    }
    await axios.put(`http://localhost:8000/users/${useLogin.id}`, {
      ...user,
      cart: cart,
    });
    setClickBuy((prev) => prev + 1);
  };

  // Click tăng giảm số lượng SP
  const handleSelectBuy = async (index, action) => {
    const selectedItem = menu[index];
    const res = await axios.get(`http://localhost:8000/users/${useLogin.id}`);
    const user = res.data;
    let cart = res.data.cart;
    const i = cart.findIndex((item) => item.id === selectedItem.id);

    if (action === "increase") {
      if (i < 0) {
        cart = [...cart, { ...selectedItem, count: 1 }];
      } else {
        cart[i].count = cart[i].count + 1;
      }
    } else if (action === "decrease") {
      if (i >= 0) {
        cart[i].count = cart[i].count - 1;
        if (cart[i].count === 0) {
          cart.splice(i, 1);
        }
      }
    }

    let newTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      if (item.count && item.price) {
        const itemTotal = item.count * item.price;
        newTotal += itemTotal;
      }
    }
    setTotal(newTotal);

    await axios.put(`http://localhost:8000/users/${useLogin.id}`, {
      ...user,
      cart: cart,
    });

    setClickBuy((prev) => prev + 1);
  };

  useEffect(() => {
    const getListBuy = async () => {
      const res = await axios.get(`http://localhost:8000/users/${useLogin.id}`);
      if (res.data.cart) {
        let newTotal = 0;
        for (let i = 0; i < res.data.cart.length; i++) {
          const currentItem = res.data.cart[i];
          if (currentItem.count && currentItem.price) {
            const itemTotal = currentItem.count * currentItem.price;
            newTotal += itemTotal;
          }
        }
        setTotal(newTotal);
      }
      setBuyItem(res.data.cart);
    };
    getListBuy();
  }, [clickBuy]);

  useEffect(() => {
    // Lưu giá trị state "total" vào localStorage khi state "total" thay đổi
    localStorage.setItem("total", total.toString());
  }, [total]);

  const handlePay = (e) => {
    e.preventDefault();
    navigate("/thanks/:id");
  };
  return (
    <div>
      <>
        <NavBar />
        <section className="restaurant-detailed-banner">
          <div className="text-center">
            <img
              className="img-fluid cover"
              src="../img/mall-dedicated-banner.png"
            />
          </div>
          <div className="restaurant-detailed-header">
            <div className="ntainer">
              <div className="row d-flex align-items-end">
                <div className="col-md-8">
                  <div className="restaurant-detailed-header-left">
                    <div style={{ display: "flex" }}>
                      <img
                        className="img-fluid mr-3 float-left"
                        alt="osahan"
                        src={data.src}
                      />
                      <h2 className="text-white">{data.name}</h2>
                    </div>
                    <p className="text-white mb-1">
                      <i />
                      {data.location}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="restaurant-detailed-header-right text-right">
                    <button className="btn btn-success" type="button">
                      <i className="icofont-clock-time" /> {data.ship}
                    </button>
                    <h6 className="text-white mb-0 restaurant-detailed-ratings">
                      <span className="generator-bg rounded text-white">
                        <i className="icofont-star" />
                        {data.start}
                      </span>{" "}
                      23 Ratings <i className="ml-3 icofont-speech-comments" />{" "}
                      91 reviews
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="offer-dedicated-nav bg-white border-top-0 shadow-sm">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="nav" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-order-online-tab"
                      data-toggle="pill"
                      href="#pills-order-online"
                      role="tab"
                      aria-controls="pills-order-online"
                      aria-selected="true"
                    >
                      Đặt món
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="offer-dedicated-body-left">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-order-online"
                      role="tabpanel"
                      aria-labelledby="pills-order-online-tab"
                    >
                      <div id="#menu" className="row">
                        {menu.map((e, index) => (
                          <div key={index} className="col-md-4 col-sm-6 mb-4">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                              <div className="list-card-image">
                                <div className="favourite-heart text-danger position-absolute">
                                  <a href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                </div>
                                <div className="member-plan position-absolute">
                                  <span className="badge badge-dark">
                                    Promoted
                                  </span>
                                </div>
                                <div>
                                  <img
                                    src={e.img}
                                    className="img-fluid item-img"
                                  />
                                </div>
                              </div>
                              <div className="p-3 position-relative">
                                <div className="list-card-body">
                                  <h6 className="mb-1">
                                    <div className="text-black">{e.title}</div>
                                  </h6>
                                  <p className="text-gray mb-2">{e.location}</p>
                                  <div className="text-gray time mb-0">
                                    <div className="btn btn-link btn-sm text-black">
                                      {e.price}
                                    </div>{" "}
                                    <span className="float-right">
                                      <button
                                        onClick={() => handleBuy(index)}
                                        className="btn btn-outline-secondary btn-sm"
                                      >
                                        Mua ngay
                                      </button>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pb-2">
                  <div className="bg-white rounded shadow-sm text-white mb-4 p-4 clearfix restaurant-detailed-earn-pts card-icon-overlap containerfood">
                    <div>
                      <img
                        className="img-fluid float-left mr-3"
                        src="/img/earn-score-icon.png"
                      />
                    </div>
                    <div>
                      <h6 className="pt-0 text-primary mb-1 font-weight-bold">
                        VSATTP
                      </h6>
                      <p className="mb-0">
                        Nhà hàng chứng nhận đảm bảo vệ sinh an toàn thực phẩm
                      </p>
                      <div className="icon-overlap">
                        <i className="icofont-sale-discount" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
                  <h5 className="mb-1 text-white">Đặt hàng ngay</h5>
                  <p className="mb-4 text-white">5 sản phẩm</p>
                  <div className="bg-white rounded shadow-sm mb-2">
                    {buyItem ? (
                      buyItem.map((item, index) => (
                        <div className="gold-members p-2 border-bottom order-food">
                          <div className="media">
                            <div className="media-body">
                              <p className="mt-1 mb-0 text-black">
                                {item.title}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray mb-0 float-right ml-2">
                            {item.price}
                          </p>
                          <div>
                            <button
                              onClick={() => handleSelectBuy(index, "decrease")}
                              className="btn btn-outline-secondary btn-sm mr-2"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.count}
                              onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (!isNaN(value) && value >= 0) {
                                  handleSelectBuy(index, "increase");
                                }
                              }}
                            />
                            <button
                              onClick={() => handleSelectBuy(index, "increase")}
                              className="btn btn-outline-secondary btn-sm ml-2"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mb-2 bg-white rounded p-2 clearfix">
                    <img
                      className="img-fluid float-left"
                      src="../img/wallet-icon.png"
                    />
                    <h6 className="font-weight-bold text-right mb-2">
                      Thanh toán: <span className="text-danger">{total}</span>{" "}
                      VNĐ
                    </h6>
                  </div>
                  <button
                    className="btn btn-success btn-block btn-lg"
                    onClick={handlePay}
                  >
                    Thanh toán <i className="icofont-long-arrow-right" />
                  </button>
                  {/* <Link
                    to={`/thanks/${useLogin.id}`}
                    className="btn btn-success btn-block btn-lg"
                  >
                    Thanh toán <i className="icofont-long-arrow-right" />
                  </Link> */}
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

export default InfoRestaurent;
