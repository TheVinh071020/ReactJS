import React from "react";
import NavBar from "../ListRetaurent/NavBar";
import { Link, useParams } from "react-router-dom";
import FooterHome from "../FooterHome/FooterHome";
import Footer from "../ListRetaurent/Footer";

function Thanks() {
  const { id } = useParams();
  // console.log(id);
  return (
    <div>
      <>
        <NavBar />
        <section className="section pt-5 pb-5 osahan-not-found-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center pt-5 pb-5">
                <img
                  className="img-fluid mb-5"
                  src="../img/thanks.png"
                  alt={404}
                />
                <h1 className="mt-2 mb-2 text-success">Thành công!</h1>
                <p className="mb-5">Bạn đã thực hiện đặt hàng thành công</p>
                <Link
                  to={`/checkorder/${id}`}
                  className="btn btn-primary btn-lg"
                >
                  Xem chi tiết đơn hàng :)
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
}

export default Thanks;
