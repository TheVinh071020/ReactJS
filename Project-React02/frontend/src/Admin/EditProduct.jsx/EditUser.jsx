import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import "./EditProduct.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function EditUser() {
  const [data, setData] = useState({
    img: "",
    title: "",
    location: "",
    price: "",
  });
  const [menu, setMenu] = useState([]);
  const { img, title, location, price } = data;
  // Nhajap input
  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // Edit
  const navigate = useNavigate();

  const { editid } = useParams();
  console.log(editid);

  const loadUser = async () => {
    let result = await axios.get(`http://localhost:8000/post/edit/1/${editid}`);
    setData(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/post/1`)
  //     .then((response) => {
  //       setMenu(response.data.menu);
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);
  // console.log(menu);

  // Thêm product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedMenu = [...menu, data];
    await axios.patch(`http://localhost:8000/post/1`, {
      menu: updatedMenu,
    });

    navigate("/admin");
  };

  return (
    <div>
      <button className="back" onClick={() => navigate("/admin")}>
        Go to back
      </button>
      <div className="mx-auto shadow p-5 w-75">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>Image:</label>
          <input
            type="text"
            name="img"
            value={img}
            onChange={handleChangeInput}
          />
          <br />
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChangeInput}
          />
          <br />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleChangeInput}
          />
          <br />
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChangeInput}
          />
          <br />

          <div>
            <Button type="submit" variant="outline-primary">
              Xác nhận
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
