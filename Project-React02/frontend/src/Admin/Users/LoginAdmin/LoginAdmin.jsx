import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidCredentials =
      formState.email === "admin@gmail.com" && formState.password === "1";

    if (isValidCredentials) {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      navigate("/");
      console.log("Invalid credentials");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formState);
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
                    <h3 className="login-heading mb-4">Wellcome to Admin!</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="forminput">
                        <label htmlFor="inputEmail">Account</label>
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          placeholder="email"
                          name="email"
                          // value={accont}
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
                          // value={password}
                          name="password"
                          onChange={handleChange}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      >
                        Đăng nhập Admin
                      </button>
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

export default LoginAdmin;
