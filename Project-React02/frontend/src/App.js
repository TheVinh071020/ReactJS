import "./App.css";
import Register from "./component/Register";
import LogIn from "./component/LogIn";
import Home from "./component/Home";
import Error404 from "./component/Error404";
import Thanks from "./component/Thanks";
import CheckOrder from "./component/CheckOrder";
import InfoRestaurent from "./ListRetaurent/InfoRestaurent";
import AdminProduct from "./Admin/ListProduct/AdminProduct";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import PageAdmin from "./Admin/PageHome.jsx/PageAdmin";
import LoginAdmin from "./Admin/Users/LoginAdmin/LoginAdmin";

function App() {
  const isLoggedIn = !!localStorage.getItem("admin");
  const [useLogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem("userId") || null)
  );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home useLogin={useLogin} />}></Route>
        <Route path="/sigin" element={<Register />}></Route>
        <Route
          path="/login"
          element={<LogIn setUserLogin={setUserLogin} />}
        ></Route>
        <Route
          path="/inforestaurent/:id"
          element={<InfoRestaurent useLogin={useLogin} />}
        ></Route>
        <Route path="/thanks/:id" element={<Thanks />}></Route>
        <Route
          path="checkorder/:id"
          element={<CheckOrder useLogin={useLogin} />}
        ></Route>
        <Route path="/error404" element={<Error404 />}></Route>
      </Routes>
      <Routes>
        <Route
          path="/admin"
          element={
            isLoggedIn ? <PageAdmin /> : <Navigate to="/loginadmin" replace />
          }
        />
        <Route path="/loginadmin" element={<LoginAdmin />}></Route>
        <Route element={<LoginAdmin />}>
          <Route path="/admin" element={<PageAdmin />}></Route>
          <Route path="/post/addproduct" element={<AdminProduct />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
