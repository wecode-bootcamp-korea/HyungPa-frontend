import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import ProductHead from "./ProductHead/ProductHead";
import Chart from "./Chart/Chart";
import MoreReview from "../ReviewDetail/MoreReview/MoreReview";
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
        count: 5,
        price: 20000,
      },
      moreReviews: [
        {
          brand: "이니스프리",
          product: "비자 트러블 클렌징젤",
          rate: "5.0",
          date: "2020.04.18",
        },
        {
          brand: "페리페라",
          product: "맑게 물든 벨벳 치크 [10호 겉바속촉 말린진저 ]",
          rate: "4.5",
          date: "2020.04.12",
        },
      ],
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
      count,
      price,
    } = this.state.product;
    const { moreReviews } = this.state;
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
        <div className="priceInfo">
          <div className="count">{count} ea</div>
          <div className="price">
            <span>
              정가 <i className="xi-chart-bar" />
            </span>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </div>
        </div>
        <div className="recommand">
          <span>추천 파워리뷰</span>
          {moreReviews.map((moreReview, index) => (
            <MoreReview key={index} moreReview={moreReview} />
          ))}
        </div>
      </>
    );
  }
}

export default ProductDetail;
