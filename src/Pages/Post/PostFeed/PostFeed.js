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
                <img
                  className="userImg"
                  src={this.props.userPicture}
                  alt="img"
                />
              </div>
              <div className="userInfo">
                <div className="userName">{this.props.userName}</div>
                <div className="skinType">
                  <span className="userSkin">{this.props.userSkin}</span>
                </div>
              </div>
            </div>
            <div className="feedTime">{this.props.feedTime}</div>
          </div>
          <div className="contentImgBox">
            <img
              className="contentImg"
              src={this.props.producImg}
              alt="제품 이미지"
            />
            <div
              className={
                this.state.isMouseOver
                  ? "contentComment contentCommentShow"
                  : "contentComment"
              }
            >
              {this.props.contentComment}
            </div>
          </div>
          <div className="productContain">
            <div className="producInfo">
              <div className="producText">
                {this.props.producBrand.slice(0, 24)}
              </div>
              <div className="producTextTwo">{this.props.producName}</div>
            </div>
          </div>
        </div>
        <div className="feedInfo">
          <div className="iconBox">
            <div className="likeImgBox">
              <img className="likeImg" src={this.props.likeImg} alt="img" />
              <div className="likeCount">{this.props.likeCount}</div>
            </div>
            <div className="commentImgBox">
              <img
                className="commentImg"
                src={this.props.commentImg}
                alt="img"
              />
              <div className="commentCount">{this.props.commentCount}</div>
            </div>
            <div className="shareImgBox">
              <img className="shareImg" src={this.props.shareImg} alt="img" />
              <div className="shareCount">{this.props.shareCount}</div>
            </div>
          </div>
          <div className="viewCount">{this.props.viewCount}</div>
        </div>
      </div>
    );
  }
}

export default PostFeed;
