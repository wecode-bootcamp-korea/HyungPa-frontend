import React, { Component } from "react";
import Aheader from "./Aheader/Aheader";
import Abody from "./Abody/Abody";
import ReviewComment from "./ReviewComment/ReviewComment";
import MoreReview from "./MoreReview/MoreReview";
import RightProfile from "./RightProfile/RightProfile";
import "./ReviewDetail.scss";

class ReviewDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postUser: {
        name: "ㅈㅕㄴ",
        skin: ["민감성", "21호"],
        card: ["", "맞팔 환영해영ㅎㅎ ❤︎"],
      },
      comment: [
        { name: "jun", text: "testestesty" },
        { name: "one", text: "안녕하세요 원철입니다." },
        { name: "oasdasdne", text: "dsadasd" },
      ],
      moreReviews: [
        {
          brand: "이니스프리",
          product: "비자 트러블 클렌징젤",
          rate: "5.0",
          date: "2020.04.18",
        },
        {
          brand: "페리페라",
          product: "맑게 물든 벨벳 치크 [10호 겉바속촉 말린진저 ]",
          rate: "4.5",
          date: "2020.04.12",
        },
      ],
    };
  }

  render() {
    const { postUser, comment, moreReviews } = this.state;
    return (
      <div className="ReviewDetail">
        <article>
          <div className="articleWrap">
            <Aheader />
            <Abody />
          </div>
          <ReviewComment postUser={postUser.name} comment={comment} />
          <div className="moreReviewText">
            <span>{postUser.name}</span>님의 다른 파워리뷰
          </div>
          {moreReviews.map((moreReview) => (
            <MoreReview moreReview={moreReview} />
          ))}
        </article>
        <div className="rightProfile">
          <div className="profileWrap">
            <RightProfile postUser={postUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewDetail;
