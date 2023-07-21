import axios from "axios";
import "./ViewPage.css";

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { useParams, useNavigate } from "react-router-dom";

function ViewPage() {
  const { id } = useParams();
  const [user, setUser] = useState({
    img: "",
    title: "",
    location: "",
    price: "",
  });
  const { img, title, location, price } = user;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:8000/post/${id}`);
      setUser(response.data);
    };

    fetchUser();
  }, [id]);

  const navigate = useNavigate();
  return (
    <div style={{ margin: "10%" }}>
      <Table striped bordered hover>
        <thead>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>
          <th>Location</th>
          <th>Price</th>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{img}</td>
            <td>{title}</td>
            <td>{location}</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </Table>
      <button
        style={{ borderRadius: "10px", border: "2px ridge", marginLeft: "45%" }}
        onClick={() => navigate("/")}
      >
        Go to back
      </button>
    </div>
  );
}

export default ViewPage;
