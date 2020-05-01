import React, { Component } from "react";
import "./PostFeed.scss";

class PostFeed extends Component {
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
      <div className="PostFeed">
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
            <img className="contentImg" src={producImg} alt="contentImg" />
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
            <div className="producInfo">
              <div className="producText">{producBrand.slice(0, 24)}</div>
              <div className="producTextTwo">{producName}</div>
            </div>
          </div>
        </div>
        <div className="feedInfo">
          <div className="iconBox">
            <div className="likeImgBox">
              <img className="likeImg" src={likeImg} alt="img" />
              <div className="likeCount">{likeCount}</div>
            </div>
            <div className="commentImgBox">
              <img className="commentImg" src={commentImg} alt="img" />
              <div className="commentCount">{commentCount}</div>
            </div>
            <div className="shareImgBox">
              <img className="shareImg" src={shareImg} alt="img" />
              <div className="shareCount">{shareCount}</div>
            </div>
          </div>
          <div className="viewCount">{viewCount}</div>
        </div>
      </div>
    );
  }
}

export default PostFeed;
