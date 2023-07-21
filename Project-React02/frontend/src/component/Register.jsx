import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};

const isEmailValid = (email) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
};
const isPasswordValid = (password) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(
    password
  );
};

function Register() {
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cart: [],
    locked: false,
  });
  const [formError, setFormError] = useState({});

  const navigate = useNavigate();

  const { name, email, password, confirmPassword } = formRegister;

  const validateForm = () => {
    const error = [];
    if (isEmptyValue(formRegister.email)) {
      error["email"] = "Nhập Email là cần thiết";
    } else {
      if (!isEmailValid(formRegister.email)) {
        error["email"] = "Mời nhập lại Email";
      }
    }
    if (isEmptyValue(formRegister.password)) {
      error["password"] = "Nhập Password là cần thiết";
    }
    if (isPasswordValid(formRegister.confirmPassword)) {
      error["confirmPassword"] = "Xác nhận Password là cần thiết";
    } else if (formRegister.confirmPassword !== formRegister.password) {
      error["confirmPassword"] = "Xác nhận Password không chính xác";
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };
  // Lấy giá trị input
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  console.log(formRegister);
  // Sự kiện Submit đăng kí

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await axios
        .post("http://localhost:8000/users", formRegister)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      Swal.fire("Good job!", "Đăng ký thành công!", "success");
      navigate("/login");
    } else {
      return formError;
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
                    <h3 className="login-heading mb-4">
                      Đăng ký thành viên nhận ngay ưu đãi!
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="forminput">
                        <label htmlFor="inputName">Name</label>
                        <input
                          type="text"
                          id="inputName"
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          value={name}
                          onChange={handleChange}
                        />

                        {formError.name && (
                          <div className="error-feedback">{formError.name}</div>
                        )}
                      </div>
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

                        {formError.email && (
                          <div className="error-feedback">
                            {formError.email}
                          </div>
                        )}
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

                        {formError.password && (
                          <div className="error-feedback">
                            {formError.password}
                          </div>
                        )}
                      </div>
                      <div className="forminput">
                        <label htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          placeholder="ConfirmPassword"
                          value={confirmPassword}
                          name="confirmPassword"
                          onChange={handleChange}
                        />

                        {formError.confirmPassword && (
                          <div className="error-feedback">
                            {formError.confirmPassword}
                          </div>
                        )}
                      </div>

                      <button className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">
                        Đăng ký
                      </button>

                      <div className="text-center pt-3">
                        Bạn đã có tài khoản?
                        <NavLink to="/login">
                          <button className="font-weight-bold">
                            Đăng nhập ngay
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

export default Register;
