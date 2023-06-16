import React, { Component } from "react";

class SignSection extends Component {
  render() {
    return (
      <div>
        <section className="sign_section layout_padding2">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h3>Sign up for Newsletter</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered
                </p>
              </div>
              <div className="col-md-7">
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SignSection;
