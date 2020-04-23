import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        ["홈", "/"],
        ["질문", "/"],
        ["리뷰", "/Review"],
        ["포스트", "/Post"],
        ["랭킹", "/Rank"],
        ["이벤트", "/"],
        ["톡", "/"],
      ],
    };
  }

  navSearch = (e) => {
    e.preventDefault();
  };

  render() {
    const { picked } = this.props;
    const { menuList } = this.state;
    return (
      <div className="Nav">
        <div className="navContainer">
          <div className="wrapLeft">
            <div className="store">
              <i className="xi-shop" />
              <div className="storeText">스토어 가기</div>
            </div>
            <div className="line" />
            <div className="navLogo">unpa.</div>
            {menuList.map((menu, index) => (
              <div
                key={index}
                className={`menu ${index === picked ? "picked" : ""}`}
              >
                <Link to={menu[1]}>{menu[0]}</Link>
              </div>
            ))}
          </div>
          <div className="wrapRight">
            <form className="inputBox">
              <input placeholder="향좋은바디워시 💖" />
              <button className="navBtn" onClick={this.navSearch}>
                <i className="xi-search" />
              </button>
            </form>
            <i className="xi-filter filter" />
            <div className="line" />
            <i className="xi-cart-o" />
            <i className="xi-pen-o" />
            <i className="xi-bars" />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
