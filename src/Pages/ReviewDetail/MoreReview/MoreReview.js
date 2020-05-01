import React, { Component } from "react";
import "./MoreReview.scss";

class MoreReview extends Component {
  render() {
    const { moreReview, trueIsReview } = this.props;
    return (
      <div className="MoreReview">
        <div
          className="moreReviewImg"
          style={{ backgroundImage: `url("${moreReview.image}")` }}
        />
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
              {moreReview.likes}
              <i className="xi-forum" />
              0
              <i className="xi-eye-o" />
              {moreReview.views}
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
