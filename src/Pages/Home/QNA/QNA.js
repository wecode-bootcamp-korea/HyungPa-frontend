import React, { Component } from "react";
import "./QNA.scss";

class QNA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        ["포인트 얼마나 모야야 사나여?", "10분 전"],
        ["각질자국 안 남는 립 추천", "10분 전"],
        ["포인트는 어떻게 모아요~~?", "11분 전"],
        ["아무나 알려주세요", "11분 전"],
        ["쉐딩 추천좀 해주세요ㅠㅠㅜ", "12분 전"],
        ["신고를 눌렀는데 어카져ㅠㅠ", "12분 전"],
      ],
    };
  }
  render() {
    return (
      <div className="QNA">
        <div className="title">
          오늘의 <span>질문</span>
        </div>
        <div className="QNAtitle">
          딱딱하고 아픈 여드름 케어 어떻게 하시나요?
        </div>
        <form className="inputBox">
          <input placeholder="형파 피플의 의견을 남겨주세요!" />
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            답변하기
          </button>
        </form>
        <div className="line" />
        <div className="subTitle">최신 질문글</div>
        <div className="Qwrap">
          {this.state.data.map((item, index) => (
            <div key={index} className="QNAitem">
              {item[0]}
              <span>{item[1]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default QNA;
