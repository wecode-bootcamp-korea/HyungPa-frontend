import React, { Component } from "react";
import "./MoreReview.scss";

class MoreReview extends Component {
  render() {
    const { moreReview } = this.props;
    return (
      <div className="MoreReview">
        <div className="moreReviewImg" />
        <div className="moreInfo">
          <div className="info">
            <div className="rate">
              <span>파워리뷰</span>
              <div className="rateBox">
                <i className="xi-star" />
                <span>{moreReview.rate}</span>
              </div>
            </div>
            <div className="brand">{moreReview.brand}</div>
            <div className="product">{moreReview.product}</div>
          </div>
          <div className="iconsNDate">
            <div className="icons">
              <i className="xi-heart" />0
              <i className="xi-forum" />0
              <i className="xi-eye-o" />0
            </div>
            <div className="date">{moreReview.date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreReview;
