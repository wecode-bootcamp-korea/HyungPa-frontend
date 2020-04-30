import React, { Component } from "react";
import "./SlideItem.scss";

class SlideItem extends Component {
  render() {
    const { brand, productName } = this.props;
    return (
      <div className="SlideItem">
        <div className="image" />
        <div className="info">
          <div className="brand">{brand}</div>
          <div className="productName">{productName}</div>
        </div>
      </div>
    );
  }
}

export default SlideItem;
