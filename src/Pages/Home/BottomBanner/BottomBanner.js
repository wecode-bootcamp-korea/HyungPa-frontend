import React, { Component } from "react";
import "./BottomBanner.scss";

class BottomBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseEnter:false,
        }
    }
isMouseEnter = () => {
this.setState ({
    isMouseEnter:!this.state.isMouseEnter,
});
}
  render() {
      const {isMouseEnter} = this.state;
      const {img, title} = this.props.bannerData;
    return (
      <div className="BottomBanner" onMouseOver={this.isMouseEnter} onMouseOut={this.isMouseEnter}>
        <div className="icon" style={isMouseEnter?{backgroundImage:`url("${img[1]}")`}:{backgroundImage:`url("${img[0]}")`}}/>
    <div className="title">{title}</div>
      </div>
    );
  }
}

export default BottomBanner;
