import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MorePost,
  ReviewDetailData,
  PostDetailData,
  DetailUser,
  MoreReviewProduct,
} from "../../Config";
import Modal from "../../Components/Modal/Modal";
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
        moreReviewData: [],
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
    // if (this.props.match.path === "/Review/Detail/:id") {
    //   this.getReivewData();
    // } else {
    // }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getPostData();
      window.scrollTo(0, 0);
    }
  }

  linkTo = (idx) => {
    this.props.history.push(
      `/post/detail/${this.state.data.moreReviewData[idx].id}`
    );
  };

  // async getReivewData() {
  //   const { id } = this.props.match.params;
  //   const userRes = await fetch(`${DetailUser}1`);
  //   const userJson = await userRes.json();
  //   const [resDescription, resMoreProduct] = await Promise.all([
  //     fetch(`${ReviewDetailData}${id}`),
  //     fetch(`${MoreReviewProduct}${id}`),
  //   ]);
  //   const [jsonDescription, jsonMoreProduct] = await Promise.all([
  //     resDescription.json(),
  //     resMoreProduct.json(),
  //   ]);
  //   this.setState({
  //     isLoading: true,
  //     trueIsReview: false,
  //     data: {
  //       body: jsonDescription,
  //       user: userJson,
  //       moreReviewData: jsonMoreProduct,
  //       comment: [],
  //     },
  //   });
  // }

  async getPostData() {
    const { id } = this.props.match.params;
    const bodyRes = await fetch(`${PostDetailData}${id}`);
    const userRes = await fetch(`${DetailUser}1`);
    const moreReviews = await fetch(MorePost);
    const bodyJson = await bodyRes.json();
    const userJson = await userRes.json();
    const moreReview = await moreReviews.json();
    this.setState({
      isLoading: true,
      trueIsReview: false,
      data: {
        body: bodyJson,
        user: userJson,
        moreReviewData: moreReview.reviews,
        comment: [],
      },
    });
  }

  render() {
    const { image, name, skin } = this.state.data.user.result;
    const { post } = this.state.data.body;
    const { comment, moreReviewData } = this.state.data;
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
            {isLoading && moreReviewData.length === 0 ? (
              <div className="noOtherReview">다른 파워리뷰가 없습니다!</div>
            ) : (
              moreReviewData.map((moreReview, idx) => (
                <div
                  onClick={() => {
                    this.linkTo(idx);
                  }}
                >
                  <MoreReview
                    key={moreReview.id}
                    moreReview={moreReview}
                    trueIsReview={trueIsReview}
                  />
                </div>
              ))
            )}
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
