import React from "react";
import Footer from "../ListRetaurent/Footer";
import HearderHome from "../HearderHome/HearderHome";
import NavBar from "../ListRetaurent/NavBar";

function Error404() {
  return (
    <>
      <NavBar />
      <section className="section pt-5 pb-5 osahan-not-found-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-5 pb-5">
              <img className="img-fluid" src="img/404.png" alt={404} />
              <h1 className="mt-2 mb-2">Không tìm thấy</h1>
              <p>
                Uh-oh! Nội dung bạn tìm kiếm <br />
                không tồn tại. Mời bạn thử lại.
              </p>
              <a className="btn btn-primary btn-lg" href="index.html">
                Trang chủ
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Error404;
