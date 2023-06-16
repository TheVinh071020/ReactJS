import React, { Component } from "react";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import InfoSection from "./InfoSection";
import SignSection from "./SignSection";
import SliderSection from "./SliderSection";
import DetailSection from "./DetailSection";
import ClientSection from "./ClientSection";
import FindSection from "./FindSection";
import ProductItem from "./ProductItem";

class ParentComp extends Component {
  constructor(){
    super()
    this.state={
      data: [
        {price:"$110.00", src:"images/p1.png"},
        {price:"$120.00", src:"images/p2.png"},
        {price:"$130.00", src:"images/p3.png"},
        {price:"$140.00", src:"images/p4.png"},
        {price:"$150.00", src:"images/p5.png"},
        {price:"$160.00", src:"images/p6.png"},
        {price:"$170.00", src:"images/p7.png"},
        {price:"$180.00", src:"images/p8.png"},
        {price:"$190.00", src:"images/p9.png"},
        {price:"$200.00", src:"images/p10.png"},
        {price:"$90.00", src:"images/p11.png"},
        {price:"$80.00", src:"images/p12.png"},
      ]
    }
  }
  render() {
    return (
      <div>
        <div className="hero_area">
          {/* header section strats */}
          <HeaderPage/>
          {/* end header section */}
          {/* slider section */}
          <SliderSection/>
          {/* end slider section */}
        </div>
        {/* detail section */}
        <DetailSection/>
        {/* end detail section */}
        {/* products section */}
        <div>
        <section className="products_section">
          <div className="heading_container">
            <h2>New Products In Store</h2>
            <p>Featured Product Just Arrived</p>
          </div>
          <div className="container layout_padding">
            <div className="product_container">
              {this.state.data.map((item, index) => (
                <ProductItem key={index} price={item.price} src={item.src}/>
              ))}
              {/* <ProductItem price="$120.00" src="images/p2.png"/>
              <ProductItem price="$120.00" src="images/p3.png"/>
              <ProductItem price="$120.00" src="images/p4.png"/>
              <ProductItem price="$120.00" src="images/p5.png"/>
              <ProductItem price="$120.00" src="images/p6.png"/>
              <ProductItem price="$120.00" src="images/p7.png"/>
              <ProductItem price="$120.00" src="images/p8.png"/>
              <ProductItem price="$120.00" src="images/p9.png"/>
              <ProductItem price="$120.00" src="images/p10.png"/>
              <ProductItem price="$120.00" src="images/p11.png"/>
              <ProductItem price="$120.00" src="images/p12.png"/>
              <ProductItem price="$120.00" src="images/p1.png"/> */}
            </div>
          </div>
        </section>
      </div>
        {/* end products section */}
        {/* find section */}
        <FindSection/>
        {/* end find section */}
        {/* client section */}
        <ClientSection/>
        {/* end client section */}
        {/* sign section */}
        <SignSection/>
        {/* end sign section */}
        {/* info section */}
        <InfoSection/>
        {/* end info section */}
        {/* footer section */}
        <FooterPage/>
        {/* footer section */}
      </div>
    );
  }
}

export default ParentComp;
