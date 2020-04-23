import React, { Component } from "react";
import "./Aheader.scss";

class Aheader extends Component {
  render() {
    return (
      <div className="Aheader">
        <div className="pdImg"></div>
        <div className="info">
          <div className="brand">이니스프리</div>
          <div className="name">제주 왕벚꽃 톤업 크림</div>
          <div className="rating">
            <i className="xi-star" />
            4.0
          </div>
        </div>
      </div>
    );
  }
}

export default Aheader;
