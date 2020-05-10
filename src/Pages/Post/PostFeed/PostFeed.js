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
      title,
      producName,
      likeCount,
      commentCount,
      viewCount,
      text,
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
              {text}
            </div>
          </div>
          <div className="productContain">
            <div className="producInfo">
              <div className="producText">{`${title}`}</div>
              <div className="producTextTwo">{producName}</div>
            </div>
          </div>
        </div>
        <div className="feedInfo">
          <div className="iconBox">
            <div className="likeImgBox">
              <div className="likeCount">{likeCount}</div>
            </div>
            <div className="commentImgBox">
              <div className="commentCount">{commentCount}views</div>
            </div>
            <div className="shareImgBox"></div>
          </div>
          <div className="viewCount">{viewCount}</div>
        </div>
      </div>
    );
  }
}

export default PostFeed;
