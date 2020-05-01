import React, { Component } from "react";
import SkinInfo from "./SkinInfo/SkinInfo";
import "./RightProfile.scss";

class RightProfile extends Component {
  render() {
    const { postUser } = this.props;
    return (
      <>
        <div className="RightProfile">
          <div
            className="image"
            style={{ backgroundImage: `url("${postUser.image}")` }}
          />
          <div className="name">{postUser.name}</div>
          <div className="skinInfo">
            {postUser.skin.map((skin, index) => (
              <SkinInfo key={index} skin={skin} />
            ))}
          </div>
          <div className="icons">
            <i className="xi-user">0</i>
            <i className="xi-pen">0</i>
            <i className="xi-heart">0</i>
          </div>
          <div className="follow">
            <i className="xi-profile" /> 팔로우
          </div>
        </div>
      </>
    );
  }
}

export default RightProfile;
