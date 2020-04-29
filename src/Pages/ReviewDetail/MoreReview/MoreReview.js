import React, { Component } from "react";
import "./MoreReview.scss";

class MoreReview extends Component {
  render() {
    const { moreReview, trueIsReview } = this.props;
    return (
      <div className="MoreReview">
        <div className="moreReviewImg" />
        <div className="moreInfo">
          <div className="info">
            {trueIsReview ? <span>파워리뷰</span> : <span>뷰티팁</span>}

            <div className="brand">{trueIsReview ? moreReview.brand : ""}</div>
            <div className="product">
              {trueIsReview ? moreReview.product : moreReview.title}
            </div>
          </div>
          <div className="icons">
            <div className="icons">
              <i className="xi-heart" />
              {moreReview.likeNum}
              <i className="xi-forum" />
              {moreReview.commentNum}
              <i className="xi-eye-o" />
              {moreReview.viewNum}
            </div>
          </div>
        </div>
        <div className="rate">
          {trueIsReview ? (
            <div className="rateBox">
              <i className="xi-star" />
              <span>{moreReview.rate}</span>
            </div>
          ) : (
            <div className="palette">
              <i className="xi-palette" />
            </div>
          )}
          <div className="date">{moreReview.date}</div>
        </div>
      </div>
    );
  }
}

export default MoreReview;
