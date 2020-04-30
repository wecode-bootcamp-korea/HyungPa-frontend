import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReviewDetailData } from "../../Config";
import Nav from "../../Components/Nav/Nav";
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
      menuNum: 2,
      isLoading: false,
      data: {
        postUser: {},
        comment: [],
        moreReviews: [],
      },
    };
  }
  async componentDidMount() {
    const res = await fetch(ReviewDetailData);
    const json = await res.json();
    this.setState({
      isLoading: true,
      data: json,
    });
  }

  render() {
    const { menuNum, isLoading } = this.state;
    const { postUser, comment, moreReviews } = this.state.data;
    return (
      <>
        {isLoading && <Nav picked={menuNum} />}
        <div className="ReviewDetail">
          <article>
            <div className="articleWrap">
              <Link to={`/ProductDetail/${this.props.match.params.reviewId}`}>
                <Aheader />
              </Link>
              <Abody />
            </div>
            {isLoading && (
              <ReviewComment postUser={postUser.name} comment={comment} />
            )}
            <div className="moreReviewText">
              <span>{postUser.name}</span>님의 다른 파워리뷰
            </div>
            {isLoading && moreReviews.length === 0 ? (
              <div className="noOtherReview">다른 파워리뷰가 없습니다!</div>
            ) : (
              moreReviews.map((moreReview, index) => (
                <MoreReview key={index} moreReview={moreReview} />
              ))
            )}
          </article>
          <div className="rightProfile">
            <div className="profileWrap">
              {isLoading && <RightProfile postUser={postUser} />}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ReviewDetail;
