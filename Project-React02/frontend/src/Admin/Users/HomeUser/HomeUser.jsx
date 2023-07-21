import React, { useEffect, useState } from "react";
// import LayoutNavbar from "../layout/LayoutNavbar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";

function HomeUser() {
  const [data, setData] = useState([]);
  // const [view, setView] = useState({});
  // const [user, setUser] = React.useState([]);
  // Xóa User

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUser();
  };

  // Lock User

  const handleLockAccount = (id) => {
    axios
      .patch(`http://localhost:8000/users/${id}`, { locked: true })
      .then(() => {
        const updatedUsers = data.map((element) => {
          if (element.id === id) {
            return { ...element, locked: true };
          }
          return element;
        });
        setData(updatedUsers);
        console.log("Khóa tài khoản thành công!");
      })
      .catch((error) => {
        console.error("Khóa tài khoản thất bại:", error.message);
      });
  };

  const handleUnlockAccount = (id) => {
    axios
      .patch(`http://localhost:8000/users/${id}`, { locked: false })
      .then(() => {
        const updatedUsers = data.map((element) => {
          if (element.id === id) {
            return { ...element, locked: false };
          }
          return element;
        });
        setData(updatedUsers);
        console.log("Mở khóa tài khoản thành công!");
      })
      .catch((error) => {
        console.error("Mở khóa tài khoản thất bại:", error.message);
      });
  };

  // Phân trang
  const [perPage, setPerPage] = useState(4);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Search
  const [searchInput, setSearchInput] = useState("");

  const loadUser = async () => {
    let url = "http://localhost:8000/users";

    if (searchInput) {
      url += `?q=${searchInput}`;
    }

    const countResponse = await axios.get(
      `${url}?_page=1&_limit=1&_count=true`
    );

    const totalResponse = countResponse.headers["x-total-count"];
    const totalPages = Math.ceil(totalResponse / perPage);
    let result = await axios.get(
      `${url}?_page=${currentPage}&_limit=${perPage}&_sort=${sortTypeName}&_order=${sortType}`
    );
    console.log(url);
    setData(result.data);
    setTotalPage(totalPages);
  };

  let paginationItem = [];
  for (let i = 1; i < totalPage; i++) {
    paginationItem.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  console.log(currentPage);

  // Sort
  const [sortType, setSortType] = useState("asc");
  const [sortTypeName, setSortTypeName] = useState("");

  const handleSort = (e) => {
    setSortTypeName(e);
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    loadUser();
  }, [searchInput, sortType, currentPage, perPage]);

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Admin User</h2>
      <div className="d-flex" role="search" style={{ marginLeft: "70%" }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button className="btn btn-outline-success" onClick={loadUser}>
          Search
        </button>
      </div>
      <Table
        striped
        bordered
        hover
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th onClick={() => handleSort("name")}>
              Name <i class="fa-solid fa-sort"></i>
            </th>
            <th>Email</th>
            <th>Password</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.password}</td>

              <td>
                {element.locked ? (
                  <Button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                    }}
                    variant="warning"
                    onClick={() => handleUnlockAccount(element.id)}
                  >
                    Mở khóa
                  </Button>
                ) : (
                  <Button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                    }}
                    variant="danger"
                    onClick={() => handleLockAccount(element.id)}
                  >
                    Khóa
                  </Button>
                )}
              </td>
              {/* <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(element.id)}
                >
                  Delete
                </Button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Pagination>
          <Pagination.Prev
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {paginationItem}
          <Pagination.Next
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPage}
          />
        </Pagination>
      </div>
    </div>
  );
}

export default HomeUser;
