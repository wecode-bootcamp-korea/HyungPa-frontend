import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ReviewDetailData,
  PostDetailData,
  DetailUser,
  PostDetailComment,
} from "../../Config";
import Modal from "../../Components/Modal/Modal";
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
      modalOn: false,
      isLoading: false,
      trueIsReview: false,
      data: {
        body: { post: {} },
        user: { result: { image: "", name: "", skin: [] } },
        comment: [],
      },
    };
  }
  handleModal = (isOn) => {
    window.scrollTo(0, 0);
    this.setState({
      modalOn: isOn,
    });
  };

  async componentDidMount() {
    this.getPostData();
    // const selectData =
    //   this.props.match.path === "/Review/Detail/:id"
    //     ? ReviewDetailData
    //     : PostDetailData;
    // const isReview =
    //   this.props.match.path === "/Review/Detail/:id" ? true : false;
    // const res = await fetch(`${selectData}${this.props.match.params.id}`);
    // const json = await res.json();
    // this.setState({
    //   isLoading: true,
    //   trueIsReview: isReview,
    //   data: json,
    // });
  }

  async getPostData() {
    const { id } = this.props.match.params;
    const bodyRes = await fetch(`${PostDetailData}${id}`);
    const userRes = await fetch(`${DetailUser}1`);
    // const commentRes = await fetch(`${PostDetailComment}${id}`);
    const bodyJson = await bodyRes.json();
    const userJson = await userRes.json();
    // const commentJson = await commentRes.json();
    this.setState({
      isLoading: true,
      trueIsReview: false,
      data: {
        body: bodyJson,
        user: userJson,
        comment: [],
      },
    });
  }

  render() {
    console.log(this.state.data);
    const { image, name, skin } = this.state.data.user.result;
    const { post } = this.state.data.body;
    const { comment } = this.state.data;
    const { isLoading, trueIsReview, modalOn, product } = this.state;
    return (
      <>
        {modalOn && (
          <Modal modalHandler={this.handleModal}>
            <span>로그인이 필요합니다.</span>
          </Modal>
        )}
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
              <ReviewComment
                postUser={name}
                comment={comment}
                handleModal={this.handleModal}
              />
            )}
            <div className="moreReviewText">
              <span>{name}</span>
              {trueIsReview ? "님의 다른 파워리뷰" : "님의 뷰티 팁"}
            </div>
            {/* {isLoading && moreReviews.length === 0 ? (
              <div className="noOtherReview">다른 파워리뷰가 없습니다!</div>
            ) : (
              moreReviews.map((moreReview, index) => (
                <MoreReview
                  key={index}
                  moreReview={moreReview}
                  trueIsReview={trueIsReview}
                />
              ))
            )} */}
          </article>
          <div className="rightProfile">
            <div className="profileWrap">
              {isLoading && (
                <RightProfile postUser={this.state.data.user.result} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ReviewDetail;
