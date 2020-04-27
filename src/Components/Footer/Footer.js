import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={`container ${this.props.location.pathname === '/'?"small":""}`}>
          <div className="title">고객센터</div>
          <div className="phone">1661-5921</div>
          <div className="time sixBlack">
            평일 10:00 ~ 19:00(점심시간 13:00 ~ 14:00 / 주말,공휴일 제외)
          </div>
          <div className="commerce">
            언파는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
            언파는 상품 거래정보 및 거래에 대해여 책임을 지지 않습니다.
          </div>
          <div className="snsIconList">
            <span className="snsText sixBlack">APP</span>
            <div className="snsIcon android">
              <i className="xi-android" />
            </div>
            <div className="snsIcon apple">
              <i className="xi-apple" />
            </div>
            <span className="snsText sixBlack">SNS</span>
            <div className="snsIcon facebook">
              <i className="xi-facebook" />
            </div>
            <div className="snsIcon kakao">
              <i className="xi-kakaostory" />
            </div>
            <div className="snsIcon naver">
              <i className="xi-naver" />
            </div>
            <div className="snsIcon instagram">
              <i className="xi-instagram" />
            </div>
          </div>
          <div className="noticeList">
            이용약관 | 개인정보처리방침 | 공지사항 | FAQ 도움말
          </div>
          <div className="info sixBlack">
            (주)라이클 서울특별시 강남구 논현로98길 28 2층 201호
          </div>
          <div className="info sixBlack">
            대표이사: 전지훈 | 
            <span className="lightBlue">사업자번호: 217-81-39422</span> |
            통신판매번호: 2015-서울강남-03925 | E-mail: 
            <span className="lightBlue">cs@unpa.co.kr</span>
          </div>
          <div className="info sixBlack">
            Copyright © LYCL inc. All rights reserved
          </div>
        </div>
      </footer>
    );
  }
}

export default  withRouter(Footer);
