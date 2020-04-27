import React, { Component } from "react";
import "./HomePost.scss";

class HomePost extends Component {
  render() {
    const { postData } = this.props;
    return (
      <div className="HomePost">
        <div className="mainTitle">
          언파 포스트 <i className="xi-angle-right" />
        </div>
        <div className="container">
          {postData.map((post) => (
            <div key={post.id} className="HomePostCard">
              <div
                className="image"
                style={{ backgroundImage: `url("${post.img}")` }}
              />
              <div className="title">{post.title}</div>
              <div className="category">{post.brand}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePost;
