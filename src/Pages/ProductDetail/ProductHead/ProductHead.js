import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./ProductHead.scss";

class ProductHead extends Component {
  render() {
    const { brand, productName, rate, likes, pReview, mReview } = this.props;
    return (
      <>
        <div className="ProductHead">
          <div className="mainImage" />
          <div className="brand">{brand}</div>
          <div className="productName">{productName}</div>
          <div className="rate">
            <StarRatingComponent
              name="rate"
              value={rate[0]}
              starCount={5}
              editing={false}
              starColor={"#ff5527"}
            />
            <span> 평점 {rate[0]}</span>
            <span className="count">(총 {rate[1]}명 평가)</span>
          </div>
          <div className="icons">
            좋아요 <span>{likes}</span>
            파워리뷰 <span>{pReview}</span>
            미니리뷰 <span>{mReview}</span>
          </div>
        </div>
        <div className="btns">
          <div className="wrap">
            <i className="xi-heart" />
            좋아요
          </div>
          <div className="wrap">
            <i className="xi-star" />
            별점주기
          </div>
          <div className="wrap">
            <i className="xi-home" />
            브랜드 페이지
          </div>
        </div>
      </>
    );
  }
}

export default ProductHead;
