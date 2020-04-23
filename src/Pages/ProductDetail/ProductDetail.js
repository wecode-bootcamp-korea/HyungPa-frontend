import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import ProductHead from "./ProductHead/ProductHead";
import Chart from "./Chart/Chart";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        brand: "자이엘",
        productName: "S.O.S 레드 칙 케어팩",
        rate: [5, 10],
        likes: 12,
        powereRview: [],
        miniReview: [],
      },
    };
  }
  render() {
    const {
      brand,
      productName,
      rate,
      likes,
      powereRview,
      miniReview,
    } = this.state.product;
    return (
      <>
        <Nav />
        <div className="ProductDetail">
          <ProductHead
            brand={brand}
            productName={productName}
            rate={rate}
            likes={likes}
            pReview={powereRview.length}
            mReview={miniReview.length}
          />
        </div>
        <div className="chart">
          <Chart />
        </div>
      </>
    );
  }
}

export default ProductDetail;
