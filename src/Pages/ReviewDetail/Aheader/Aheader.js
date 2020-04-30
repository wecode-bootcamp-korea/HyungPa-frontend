import React, { Component } from "react";
import "./Aheader.scss";

class Aheader extends Component {
  render() {
    const { brand, product, rate } = this.props.product;
    return (
      <div className="Aheader">
        <div className="pdImg"></div>
        <div className="info">
          <div className="brand">{brand}</div>
          <div className="name">{product}</div>
          <div className="rating">
            <i className="xi-star" />
            {rate}
          </div>
        </div>
      </div>
    );
  }
}

export default Aheader;
