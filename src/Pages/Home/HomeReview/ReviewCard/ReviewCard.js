import React, { Component } from "react";
import "./ReviewCard.scss";

class ReviewCard extends Component {
  render() {
    const { img, title, likes } = this.props;
    return (
      <div className="ReviewCard">
        <div className="image" style={{ backgroundImage: `url("${img}")` }} />
        <div className="title">{title}...</div>
        <div className="brand">
          <i className="xi-heart" />
          {likes}
        </div>
      </div>
    );
  }
}

export default ReviewCard;
