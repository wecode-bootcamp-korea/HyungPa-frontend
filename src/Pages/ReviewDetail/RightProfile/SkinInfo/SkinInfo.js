import React, { Component } from "react";
import "./SkinInfo.scss";

class SkinInfo extends Component {
  render() {
    const { skin } = this.props;
    return <div className="SkinInfo">{skin}</div>;
  }
}

export default SkinInfo;
