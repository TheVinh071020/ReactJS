import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import "./AdminProduct.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AdminProduct() {
  const [data, setData] = useState({
    img: "",
    title: "",
    location: "",
    price: "",
  });

  const [menu, setMenu] = useState([]);

  const { img, title, location, price } = data;

  // Nhập input
  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // console.log(data);
  // Thêm sản phẩm vào menu

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/post/1`)
      .then((response) => {
        setMenu(response.data.menu);
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(menu);

  // Thêm product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMenu((prevMenu) => [...prevMenu, data]);
    await axios.patch(`http://localhost:8000/post/1`, {
      menu: [...menu, data],
    });
    navigate("/admin");
  };
  return (
    <div>
      <div className="mx-auto shadow p-5 w-75">
        <button className="back" onClick={() => navigate("/admin")}>
          Go to back{" "}
        </button>
        <h2>Thêm sản phẩm</h2>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label>Image:</label>
            <input
              type="text"
              name="img"
              value={img}
              onChange={handleChangeInput}
            />
          </div>
          <br />
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChangeInput}
            />
          </div>
          <br />
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={handleChangeInput}
            />
          </div>
          <br />
          <div>
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={handleChangeInput}
            />
          </div>
          <br />
          <div className="btn">
            <Button type="submit" variant="outline-primary">
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminProduct;
