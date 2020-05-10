import React from "react";
import { API } from "../../Config";
import "./Signunpa.scss";
import CustomButton from "./CustomButton";

class Signunpa extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleID = (event) => {
    // console.log(event.target.value)
    this.setState({
      email: event.target.value,
    });
  };

  handlePW = (event) => {
    console.log("pwvalue : ", event.target.value);
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = () => {
    console.log("this.state : ", this.state);
    fetch(`${API}/user/sign-up`, {
      method: "POST",
      // headers: {
      //   "token": localStorage.setItem("wtw-token")
      // },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        birth_date: "1991-01-01",
        selected_agreement: "True",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "SUCCESS") {
          this.props.history.push("/Signin");
        }
        // if (response.token) {
        //   localStorage.setItem("token", response.token);
        //   alert("로그인에 성공하셨습니다.");
        //   this.props.history.push("/");
        // }
      });
  };
  makeYear = () => {
    const date = new Date();
    const yearAry = [];
    for (let y = date.getFullYear(); y >= 1921; y--) {
      yearAry.push(y);
    }
    return yearAry;
  };

  render() {
    const year = this.makeYear();
    return (
      <div className="Unpabody">
        <div className="containersignup">
          <div className="Unpasignup">
            <div className="textcenter">
              <img
                className="textimg"
                alt="textimg"
                src="https://www.unpa.me/assets/images_v2/img_signup_logo.png"
              />
            </div>
            <div className="Simplesignup">
              <div className="fieldwrap">
                <label className="labeltext">이메일</label>
                <div className="emailbox">
                  <div className="emailipt">
                    <input
                      onChange={this.handleID}
                      type="email"
                      className="underline4"
                      placeholder="이메일"
                    />
                  </div>
                  <div className="emaillist">
                    <select className="selectinput">
                      <option value="direct">@직접입력</option>
                      <option value="naver">@naver.com</option>
                      <option value="daum">@daum.net</option>
                      <option value="gmail">@gmail.com</option>
                    </select>
                  </div>
                </div>
                <div className="passwordipt">
                  <input
                    onChange={this.handlePW}
                    type="password"
                    className="password"
                    placeholder="비밀번호(6자~12자)"
                  />
                </div>
                <div className="handphontextbox">
                  <label label className="labeltext">
                    핸드폰 번호
                  </label>
                  <div className="handphontext">
                    <img
                      class="icons"
                      alt="icons"
                      src="https://img.icons8.com/android/24/000000/high-importance.png"
                    />
                    <span className="overseastext">해외에 계신가요?</span>
                  </div>
                </div>
                <div className="handphoneinput">
                  <input
                    type="text"
                    className="phonenumber"
                    placeholder="000-0000-0000"
                  />
                  <div className="certifi">
                    <input
                      type="button"
                      className="certification"
                      value="인증하기"
                    />
                  </div>
                </div>
                <div className="birth">
                  <label className="labeltext">생년월일(선택)</label>
                  <div className="birthflex">
                    <div className="birthinput">
                      <select className="year">
                        <option value="none">년도</option>
                        {year.map((year) => (
                          <option value={`${year}`}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div className="month">
                      <select className="monthslc">
                        <option value="g">월</option>
                        <option value="h">1</option>
                        <option value="i">2</option>
                        <option value="j">3</option>
                        <option value="k">4</option>
                        <option value="l">5</option>
                        <option value="m">6</option>
                        <option value="o">7</option>
                        <option value="p">8</option>
                        <option value="q">9</option>
                        <option value="r">10</option>
                        <option value="n">11</option>
                        <option value="s">12</option>
                      </select>
                    </div>
                    <div className="day">
                      <select className="dayslc">
                        <option value="t">일</option>
                        <option value="u">1</option>
                        <option value="v">2</option>
                        <option value="x">3</option>
                        <option value="y">4</option>
                        <option value="z">5</option>
                        <option value="aa">6</option>
                        <option value="bb">7</option>
                        <option value="cc">8</option>
                        <option value="dd">9</option>
                        <option value="ee">10</option>
                        <option value="ff">11</option>
                        <option value="gg">12</option>
                        <option value="hh">13</option>
                        <option value="ii">14</option>
                        <option value="jj">15</option>
                        <option value="kk">16</option>
                        <option value="ll">17</option>
                        <option value="mm">18</option>
                        <option value="nn">19</option>
                        <option value="oo">20</option>
                        <option value="pp">21</option>
                        <option value="qq">22</option>
                        <option value="rr">23</option>
                        <option value="ss">24</option>
                        <option value="tt">25</option>
                        <option value="uu">26</option>
                        <option value="vv">27</option>
                        <option value="ww">28</option>
                        <option value="xx">29</option>
                        <option value="yy">30</option>
                        <option value="zz">31</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="Referrerspan">
                  <span>추천인 입력 (선택)</span>
                </div>
                <div className="Referrer">
                  <input
                    type="text"
                    className="recommend"
                    placeholder="추천인의 닉네임을 입력해주세요"
                  />
                  <div className="Referrercheck">
                    <input
                      type="button"
                      className="Referrercheckitout"
                      value="확인"
                    />
                  </div>
                </div>
                <div className="checkbox">
                  <div className="Fullpromise">
                    <CustomButton />
                    <span className="fullcheck">전체약관의 동의합니다.</span>
                  </div>
                  <div className="Fullpromise">
                    <CustomButton />
                    <span className="fullcheck">
                      14세 이상입니다.<span className="necessary">(필수)</span>
                    </span>
                  </div>
                  <div className="Fullpromise">
                    <CustomButton />
                    <div className="Acceptdiv">
                      <span className="fullcheck">
                        이용약관 동의<span className="necessary">(필수)</span>
                      </span>
                      <div>
                        <span className="underline1">내용보기</span>
                      </div>
                    </div>
                  </div>
                  <div className="Fullpromise">
                    <CustomButton />
                    <div className="Acceptdiv">
                      <span className="fullcheck">
                        개인정보 수집 및 이용동의
                        <span className="necessary">(필수)</span>
                      </span>
                      <div>
                        <span className="underline2">내용보기</span>
                      </div>
                    </div>
                  </div>
                  <div className="Fullpromise">
                    <CustomButton />
                    <div className="Acceptdiv">
                      <span className="fullcheck">
                        선택적 수집 항목 동의
                        <span className="necessary">(선택)</span>
                      </span>
                      <div>
                        <span className="underline3">내용보기</span>
                      </div>
                    </div>
                  </div>
                  <div className="Signup-subscription">
                    <button
                      onClick={this.handleLogin}
                      type="text"
                      className="Joinbutton"
                    >
                      가입완료
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signunpa;
