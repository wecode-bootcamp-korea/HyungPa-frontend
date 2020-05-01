import React, { Component } from "react";
import { ProductDetailData } from "../../Config";
import Nav from "../../Components/Nav/Nav";
import ProductHead from "./ProductHead/ProductHead";
import Chart from "./Chart/Chart";
import MoreReview from "../ReviewDetail/MoreReview/MoreReview";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      label: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
      data: {
        product_data: [{}],
        moreReviews: [],
      },
    };
  }

  async componentDidMount() {
    const res = await fetch(
      `${ProductDetailData}${this.props.match.params.productId}`
    );
    const json = await res.json();
    this.setState({
      isLoading: true,
      data: json,
    });
  }

  avgStar = () => {
    if (this.state.isLoading) {
      const { rateData } = this.state.data.product_data[0];
      const { label } = this.state;
      let result = 0;
      for (let num in label) {
        result +=
          (label[num] * rateData[num]) / rateData.reduce((a, b) => a + b);
      }
      return Number(result.toFixed(1));
    }
  };

  render() {
    const { label, isLoading } = this.state;
    const {
      brand,
      productName,
      productImage,
      rateData,
      likes,
      powerReview,
      miniReview,
      count,
      price,
    } = this.state.data.product_data[0];
    const { review_data } = this.state.data;
    return (
      <>
        <Nav />
        <div className="ProductDetail">
          <div className="productHead">
            {isLoading && (
              <ProductHead
                brand={brand}
                productName={productName}
                productImage={productImage}
                rate={[this.avgStar(), rateData.reduce((a, b) => a + b)]}
                likes={likes}
                powerReview={powerReview}
                miniReview={miniReview}
                price={price}
              />
            )}
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
                {isLoading
                  ? label[rateData.indexOf(Math.max(...rateData))]
                  : ""}
              </div>
              <div className="wrap">
                <span>총 별점 수</span>
                {isLoading ? rateData.reduce((a, b) => a + b) : ""}
              </div>
            </div>
            {isLoading && <Chart rateData={rateData} />}
          </div>
          <div className="priceInfo">
            <div className="count">{count}</div>
            <div className="price">
              <span>
                정가 <i className="xi-chart-bar" />
              </span>
              {isLoading
                ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : ""}
              원
            </div>
          </div>
          <div className="recommand">
            <span>추천 파워리뷰</span>
            {isLoading
              ? review_data.map((moreReview) => (
                  <MoreReview key={moreReview.id} moreReview={moreReview} />
                ))
              : ""}
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetail;
