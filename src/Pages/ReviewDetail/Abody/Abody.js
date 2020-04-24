import React, { Component } from "react";
import "./Abody.scss";

class Abody extends Component {
  render() {
    return (
      <div className="Abody">
        <div className="container">여기에 메인 정보가 들어갑니다.</div>
        <div className="aInfo">
          <div className="requestLike">
            <div className="likeText">질문에 공감한다면 ♡를 눌러주세요!</div>
            <div className="giveLove">
              <i className="xi-heart" />6
            </div>
          </div>
          <div className="info">
            <div className="declaration">
              <span>신고하기</span>
              <span>숨기기</span>
            </div>
            <div className="date">
              <span>2020.04.20</span>
              <span>조회 48</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Abody;
