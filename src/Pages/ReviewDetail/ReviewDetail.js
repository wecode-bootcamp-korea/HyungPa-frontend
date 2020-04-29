import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReviewDetailData, PostDetailData } from "../../Config";
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
      isLoading: false,
      trueIsReview: false,
      data: {
        postUser: {},
        product: {},
        post: {
          title: "",
          description: "",
          likeNum: "",
          viewNum: "",
        },
        comment: [],
        moreReviews: [],
      },
    };
  }

  async componentDidMount() {
    const selectData =
      this.props.match.path === "/Review/Detail/:reviewId"
        ? ReviewDetailData
        : PostDetailData;
    const isReview =
      this.props.match.path === "/Review/Detail/:reviewId" ? true : false;
    const res = await fetch(selectData);
    const json = await res.json();
    this.setState({
      isLoading: true,
      trueIsReview: isReview,
      data: json,
    });
  }

  render() {
    const { isLoading, trueIsReview } = this.state;
    const { postUser, product, post, comment, moreReviews } = this.state.data;
    return (
      <>
        {isLoading && <Nav />}
        <div className="ReviewDetail">
          <article>
            <div className="articleWrap">
              {trueIsReview ? (
                <Link to={`/ProductDetail/${this.props.match.params.reviewId}`}>
                  <Aheader product={product} />
                </Link>
              ) : (
                <div className="postTitle">{post.title}</div>
              )}
              <Abody post={post} />
            </div>
            {isLoading && (
              <ReviewComment postUser={postUser.name} comment={comment} />
            )}
            <div className="moreReviewText">
              <span>{postUser.name}</span>
              {trueIsReview ? "님의 다른 파워리뷰" : "님의 뷰티 팁"}
            </div>
            {isLoading && moreReviews.length === 0 ? (
              <div className="noOtherReview">다른 파워리뷰가 없습니다!</div>
            ) : (
              moreReviews.map((moreReview, index) => (
                <MoreReview
                  key={index}
                  moreReview={moreReview}
                  trueIsReview={trueIsReview}
                />
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
