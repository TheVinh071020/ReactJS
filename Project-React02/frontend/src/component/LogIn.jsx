import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LogIn({ setUserLogin }) {
  // Khai navigate
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;
  useEffect(() => {
    axios.get("http://localhost:8000/users").then((res) => setUsers(res.data));
  }, []);

  // Lấy giá trị input
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  console.log(loginData);
  // Sự kiện Submit đăng nhập
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user) {
      if (user.locked) {
        Swal.fire(
          "Tài khoản đã bị khóa",
          "Vui lòng liên hệ với quản trị viên để biết thêm chi tiết",
          "warning"
        );
      } else {
        localStorage.setItem("userId", JSON.stringify(user));
        setUserLogin(user);
        //  navigate("/");
        Swal.fire("Good job!", "Đăng Nhập Thành Công!", "success", "OK").then(
          (result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          }
        );
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Đăng nhập thất bại",
        text: "Tài khoản hoặc mật khẩu không trùng khớp !!",
      });
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
                    <h3 className="login-heading mb-4">Wellcome back!</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="forminput">
                        <label htmlFor="inputEmail">Email address</label>
                        <input
                          type="email"
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="forminput">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          name="password"
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      >
                        Đăng nhập
                      </button>
                      <div className="text-center pt-3">
                        Bạn chưa có tài khoản?{" "}
                        <NavLink to="/sigin">
                          <button className="font-weight-bold">
                            Đăng Ký ngay
                          </button>
                        </NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
