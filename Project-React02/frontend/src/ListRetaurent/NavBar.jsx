import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";

function NavBar() {
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
  console.log(statusUser);

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
              <ul className=" ul navbar-nav ml-auto">
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
              <i className="fa-solid fa-user"></i>
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
      </div>
    </div>
  );
}

export default NavBar;
