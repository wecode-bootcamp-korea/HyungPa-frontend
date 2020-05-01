import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        ["홈", "/"],
        ["질문", "/QnA"],
        ["리뷰", "/Review"],
        ["포스트", "/Post"],
        ["랭킹", "/Rank"],
        ["이벤트", "/Event"],
        ["톡", "/Talk"],
      ],
    };
  }
  navSearch = (e) => {
    e.preventDefault();
  };

  render() {
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
              <Link key={index} to={menu[1]}>
                <div
                  className={`menu ${
                    menu[1] === this.props.location.pathname ? "picked" : ""
                  }`}
                >
                  {menu[0]}
                </div>
              </Link>
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
            <Link to={"/signin"}>
              <i className="xi-bars" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
