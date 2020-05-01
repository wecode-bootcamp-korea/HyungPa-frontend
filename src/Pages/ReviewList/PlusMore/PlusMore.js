import React, { Component } from "react";
import "./plusMore.scss";

class PlusMore extends Component {
  render() {
    return (
      <div className="plusMoreContain" onClick={this.props.more}>
        <div className="plusMoreBox">
          <button className="plusMoreBtn">더 보기</button>
        </div>
      </div>
    );
  }
}

export default PlusMore;
