import React, { Component } from "react";
import "./Abody.scss";

class Abody extends Component {
  render() {
    const { description, likeNum, viewNum, postDate } = this.props.post;
    return (
      <div className="Abody">
        <div className="container">{description}</div>
        <div className="aInfo">
          <div className="requestLike">
            <div className="likeText">질문에 공감한다면 ♡를 눌러주세요!</div>
            <div className="giveLove">
              <i className="xi-heart" />
              {likeNum}
            </div>
          </div>
          <div className="info">
            <div className="declaration">
              <span>신고하기</span>
              <span>숨기기</span>
            </div>
            <div className="date">
              <span>{postDate}</span>
              <span>조회 {viewNum}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Abody;
