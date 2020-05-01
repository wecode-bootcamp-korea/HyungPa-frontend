import React, { Component } from "react";
import "./ReviewFeed.scss";

class ReviewFeed extends Component {
  constructor() {
    super();

    this.state = {
      isMouseOver: false,
    };
  }

  isMouseOver = () => {
    this.setState({
      isMouseOver: !this.state.isMouseOver,
    });
  };
  render() {
    const {
      userPicture,
      userName,
      userSkin,
      feedTime,
      producImg,
      contentComment,
      producBrand,
      producName,
      likeImg,
      likeCount,
      commentImg,
      commentCount,
      shareImg,
      shareCount,
      viewCount,
    } = this.props;

    const { isMouseOver } = this.state;

    return (
      <div className="ReviewFeed">
        <div
          className="feedContent"
          onMouseEnter={this.isMouseOver}
          onMouseLeave={this.isMouseOver}
        >
          <div className="userContain">
            <div className="userInfoBox">
              <div className="userImgBox">
                <img className="userImg" src={userPicture} alt="img" />
              </div>
              <div className="userInfo">
                <div className="userName">{userName}</div>
                <div className="skinType">
                  <span className="userSkin">{userSkin}</span>
                </div>
              </div>
            </div>
            <div className="feedTime">{feedTime}</div>
          </div>
          <div className="contentImgBox">
            <img className="contentImg" src={producImg} />
            <div
              className={
                isMouseOver
                  ? "contentComment contentCommentShow"
                  : "contentComment"
              }
            >
              {contentComment}
            </div>
          </div>
          <div className="productContain">
            <div className="producImgBox">
              <img className="producImg" src={producImg} alt="img" />
            </div>
            <div className="producInfo">
              <div className="producBrand">{producBrand}</div>
              <div className="producName">{producName}</div>
            </div>
          </div>
        </div>
        <div className="feedInfo">
          <div className="iconBox">
            <div className="likeImgBox"></div>
            <div className="commentImgBox"></div>
            <div className="shareImgBox"></div>
          </div>
          <div className="viewCount">{viewCount}</div>
        </div>
      </div>
    );
  }
}

export default ReviewFeed;
