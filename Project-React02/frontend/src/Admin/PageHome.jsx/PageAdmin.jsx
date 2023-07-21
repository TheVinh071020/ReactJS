import React, { useState } from "react";
import "./PageAdmin.css";
// import PageUser from "../PageAdmin/PageUser";
import HomeAdmin from "../HomeAdmin/HomeAdmin";
import { Link, useNavigate } from "react-router-dom";
import HomeUser from "../Users/HomeUser/HomeUser";
import Button from "react-bootstrap/esm/Button";
function PageAdmin() {
  const [isUserPageVisible, setUserPageVisible] = useState(true);
  const [isProductPageVisible, setProductPageVisible] = useState(false);

  const navigate = useNavigate();

  const showUserPage = () => {
    setUserPageVisible(true);
    setProductPageVisible(false);
  };

  const showProductPage = () => {
    setUserPageVisible(false);
    setProductPageVisible(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/loginadmin");
  };
  return (
    <div>
      <div className="container2">
        <div className="featare">
          <p onClick={showUserPage}>
            <i class="fa-solid fa-user"></i>Quản lý user
          </p>
          <p onClick={showProductPage}>
            <i class="fa-solid fa-mobile-screen-button"></i>Quản lý sản phẩm
          </p>
        </div>
        <div className="display-group">
          <div className="header">
            <div>
              <h1>Nhà hàng Hoa Sen</h1>
            </div>
            <div>
              <div className="avt1">
                <div className="avt">
                  <i class="fa-solid fa-user"></i>
                  <p>Admin</p>
                </div>
                <div className="logout">
                  <Button onClick={handleLogout} variant="danger">
                    <i class="fa-solid fa-right-from-bracket"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="display">
            {isUserPageVisible && <HomeUser />}
            {isProductPageVisible && <HomeAdmin />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageAdmin;
