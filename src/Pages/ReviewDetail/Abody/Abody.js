import React, { Component } from "react";
import "./Abody.scss";

class Abody extends Component {
  render() {
    const { description, like, view, postDate } = this.props.post;
    return (
      <div className="Abody">
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: description }} />
          {/* <rawHtml>{description}</rawHtml> */}
        </div>
        <div className="aInfo">
          <div className="requestLike">
            <div className="likeText">질문에 공감한다면 ♡를 눌러주세요!</div>
            <div className="giveLove">
              <i className="xi-heart" />
              {like}
            </div>
          </div>
          <div className="info">
            <div className="declaration">
              <span>신고하기</span>
              <span>숨기기</span>
            </div>
            <div className="date">
              <span>{postDate ? postDate.slice(0, 10) : postDate}</span>
              <span>조회 {view}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Abody;
