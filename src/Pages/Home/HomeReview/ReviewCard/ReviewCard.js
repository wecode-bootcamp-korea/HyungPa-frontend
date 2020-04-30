import React, { Component } from "react";
import "./ReviewCard.scss";

class ReviewCard extends Component {
  render() {
    const { img, title, brand } = this.props;
    return (
      <div className="ReviewCard">
        <div className="image" style={{ backgroundImage: `url("${img}")` }} />
        <div className="title">{title}</div>
        <div className="brand">{brand}</div>
      </div>
    );
  }
}

export default ReviewCard;
