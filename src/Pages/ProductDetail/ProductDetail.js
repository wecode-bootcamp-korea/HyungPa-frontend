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
        rateData: [0, 1, 2, 4, 7, 11, 16, 11, 7, 4, 2],
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
      label: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  avgStar = () => {
    const { rateData } = this.state.product;
    const { label } = this.state;
    let result = 0;
    for (let num in label) {
      result += (label[num] * rateData[num]) / rateData.reduce((a, b) => a + b);
    }
    return result.toFixed(1);
  };
  render() {
    const {
      brand,
      productName,
      rateData,
      likes,
      powereRview,
      miniReview,
      count,
      price,
    } = this.state.product;
    const { moreReviews, label } = this.state;
    return (
      <>
        <Nav />
        <div className="ProductDetail">
          <div className="productHead">
            <ProductHead
              brand={brand}
              productName={productName}
              rate={[this.avgStar(), rateData.reduce((a, b) => a + b)]}
              likes={likes}
              pReview={powereRview.length}
              mReview={miniReview.length}
            />
          </div>
          <div className="chart">
            <div className="title">
              <span>{productName}</span>의 별점분포
            </div>
            <div className="calculate">
              <div className="wrap">
                <span>평균 별점</span>
                {this.avgStar()}
              </div>
              <div className="wrap">
                <span>가장 많은 별점</span>
                {label[rateData.indexOf(Math.max(...rateData))]}
              </div>
              <div className="wrap">
                <span>총 별점 수</span>
                {rateData.reduce((a, b) => a + b)}
              </div>
            </div>
            <Chart rateData={rateData} />
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
        </div>
      </>
    );
  }
}

export default ProductDetail;
