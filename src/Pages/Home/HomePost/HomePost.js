import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/post/detail/${post.id}`} key={post.id}>
              <div key={post.id} className="HomePostCard">
                <div
                  className="image"
                  style={{ backgroundImage: `url("${post.first_image}")` }}
                />
                <div className="title">{post.title}</div>
                <div className="category">{post.brand}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePost;
