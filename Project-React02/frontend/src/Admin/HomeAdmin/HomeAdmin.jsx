import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";

function HomeAdmin() {
  const [data, setData] = useState([]);
  const [view, setView] = useState({});

  // render phần menu
  const [menu, setMenu] = useState([]);
  const { id } = useParams();

  // Xóa
  const [deletePro, setDeletePro] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/post/1`)
      .then((response) => {
        setMenu(response.data.menu);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/post/1`)
      .then((response) => {
        setDeletePro(response.data.menu);
      })
      .catch((err) => console.log(err));
  }, [id]);
  // console.log(deletePro);

  const handleDelete = async (index) => {
    const updatedMenu = [...menu];
    updatedMenu.splice(index, 1); // Xóa sản phẩm khỏi mảng

    setMenu(updatedMenu);

    await axios
      .patch("http://localhost:8000/post/1", { menu: updatedMenu })
      .then(() => {
        console.log("Sản phẩm đã được xóa thành công!");
      })
      .catch((error) => {
        console.log("Lỗi khi xóa sản phẩm: ", error);
      });
  };
  // console.log(menu);

  // Edit
  const navigate = useNavigate();
  const [editProduct, setEditProduct] = useState([]);
  // Edit input
  const [editPro, setEditPro] = useState({
    img: "",
    title: "",
    location: "",
    price: "",
  });

  const { img, title, location, price } = editPro;
  const handleChangeInput = (e) => {
    setEditPro({ ...editPro, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/post/1`)
      .then((response) => {
        setEditProduct(response.data.menu);
      })
      .catch((err) => console.log(err));
  }, [id]);
  // console.log(editProduct);

  // Ấn vào button edit thì hiện modal
  const handleEdit = async (index) => {
    const productIndex = editProduct.findIndex(
      (product) => product.id === index + 1
    );

    // Tiếp tục xử lý dựa trên chỉ mục sản phẩm được tìm thấy
    if (productIndex !== -1) {
      const productToEdit = editProduct[productIndex];
      setEditPro(productToEdit);
    }
  };

  // const handeleAddEdit = async (e) => {
  //   e.preventDefault();
  //   const updatedMenu = [...menu, editPro];
  //   console.log(updatedMenu);
  //   // await axios.patch(`http://localhost:8000/post/1`, {
  //   //   menu: updatedMenu,
  //   // });

  //   // setMenu(updatedMenu); // Cập nhật lại state menu

  //   // navigate("/admin"); // Chuyển hướng đến trang /admin
  // };

  const handeleAddEdit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: editPro.id,
      img: editPro.img,
      title: editPro.title,
      location: editPro.location,
      price: editPro.price,
    };

    const updatedMenu = menu.map((product) =>
      product.id === editPro.id ? updatedProduct : product
    );

    await axios
      .patch(`http://localhost:8000/post/1`, {
        menu: updatedMenu,
      })
      .then(() => {
        setMenu(updatedMenu);
        navigate("/admin");
      })
      .catch((error) => {
        console.log("Lỗi khi cập nhật sản phẩm: ", error);
      });
  };

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
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const updatedMenu = [...menu, data];
  //   await axios.patch(`http://localhost:8000/post/1`, {
  //     menu: updatedMenu,
  //   });

  // navigate("/admin");
  // };
  // const handleShowModel = (id) => {
  //   axios.get(`http://localhost:8000/post/${id}`).then((res) => {
  //     setView(res.data);
  //   });
  //   setShow(true);
  // };

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);

  // Phân trang
  const [perPage, setPerPage] = useState(4);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Search
  const [searchInput, setSearchInput] = useState("");

  const loadUser = async () => {
    let url = "http://localhost:8000/post";

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
    // console.log(url);
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

  // console.log(currentPage);

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
      <div></div>
      <div>
        <h2 style={{ textAlign: "center" }}>Admin Products</h2>
        <div className="d-flex" role="search" style={{ marginLeft: "70%" }}>
          <Link
            to="/post/addproduct"
            style={{ marginRight: "30px", with: "80px" }}
          >
            <Button variant="outline-success">Add Product</Button>
          </Link>
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
              <th onClick={() => handleSort("name")} style={{ with: "200px" }}>
                Image <i class="fa-solid fa-sort"></i>
              </th>
              <th>Title</th>
              <th>Location</th>
              <th onClick={() => handleSort("age")}>
                Price <i class="fa-solid fa-sort"></i>
              </th>

              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((element, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{element.id}</td>
                <td>{element.img}</td>
                <td>{element.title}</td>
                <td>{element.location}</td>
                <td>{element.price}</td>

                <td>
                  <>
                    {/* Button trigger modal */}

                    <Button
                      onClick={() => handleEdit(index)}
                      variant="warning"
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Edit
                    </Button>

                    {/* Modal */}
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Edit Product
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <form className="form">
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
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              onClick={handeleAddEdit}
                              type="button"
                              className="btn btn-primary"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </td>
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
    </div>
  );
}

export default HomeAdmin;
